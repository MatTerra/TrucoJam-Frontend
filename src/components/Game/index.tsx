import Ally from "components/Ally";
import Button from "components/Button";
import Stack from "components/CardStack";
import Hand from "components/Hand";
import Rival from "components/Rival";
import { RoundResult, useRoom } from "context/RoomContext";
import { useEffect, useMemo, useState } from "react";
import { api } from "services/api";
import { GameResult } from "templates/RoomPage";
import { Card } from "./cards";
import * as S from "./styles";

enum Status {
  waiting,
  ready,
  playing,
  finished,
}

export interface GameProps {
  roomID: string;
  mayRaise: boolean;
}

const Game = ({ roomID, mayRaise }: GameProps) => {
  const { game, setGame, round, setRound } = useRoom();

  const onStart = async () => {
    if (game?.status === Status.ready) {
      try {
        const res = (await api()).post<GameResult>("/" + roomID);
        setGame((await res).data.data.Game);
      } catch (e: any) {}
    }
  };

  const onCardClick = async (cardIndex: number) => {
    try {
      const res = (await api()).post<RoundResult>(`/${roomID}/partida`, {
        id_: cardIndex,
      });
      setRound((await res).data.data.partida);
    } catch (e: any) {}
  };

  const handleClick = async () => {
    try {
      const res = (await api()).put<RoundResult>(`/${roomID}/partida/fold`);
      setRound((await res).data.data.partida);
    } catch (e: any) {
      console.log(e);
    }
  };

  const showTruco = useMemo(() => game?.status === Status.playing, [game]);
  const showBoard = useMemo(() => (game?.status || 0) !== Status.waiting, [
    game,
  ]);

  const [lastHand, setLastHand] = useState<Card[]>([]);
  useEffect(() => {
    if (round?.mao_jogador) {
      setLastHand(round.mao_jogador.cartas);
    }
  }, [round]);

  return showBoard ? (
    <S.Wrapper>
      <S.Score>
        <h2>Score</h2>
        <h2>{game?.pontuacao[0] || 0}</h2>
        <h2>X</h2>
        <h2>{game?.pontuacao[1] || 0}</h2>
      </S.Score>
      <S.Rival0>
        <Rival handCount={3} />
      </S.Rival0>
      <S.Rival1>
        <Rival handCount={3} />
      </S.Rival1>
      <S.Ally>
        <Ally handCount={3} />
      </S.Ally>
      <S.Hand>
        <Hand cards={lastHand} onClick={onCardClick} />
      </S.Hand>
      <S.Stack>
        <Stack history={round?.maos || []} />
      </S.Stack>
      <S.StartArea>
        {game?.status === Status.ready && (
          <Button onClick={onStart}>Start</Button>
        )}
      </S.StartArea>
      {showTruco && (
        <S.TrucoArea>
          <Button color="primary" size="medium" onClick={handleClick}>
            Truco
          </Button>
          {!mayRaise && (
            <Button color="secondary" size="medium">
              Fugir
            </Button>
          )}
        </S.TrucoArea>
      )}
    </S.Wrapper>
  ) : null;
};

export default Game;
