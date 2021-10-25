import Ally from "components/Ally";
import Button from "components/Button";
import Stack from "components/CardStack";
import Hand from "components/Hand";
import Rival from "components/Rival";
import { RoundResult, useRoom } from "context/RoomContext";
import { api } from "services/api";
import { GameResult } from "templates/RoomPage";
import * as S from "./styles";

let isTruco = false;
let message = "truco";
const handleClick = () => {
  if (isTruco) {
    message = "Fugir";
  } else {
    message = "Truco";
    isTruco = true;
  }
};

enum Status {
  waiting,
  ready,
  finished,
}

export interface GameProps {
  roomID: string;
}

const Game = ({ roomID }: GameProps) => {
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
      console.log(res);
    } catch (e: any) {}
  };

  return (
    <S.Wrapper>
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
        <Hand
          cards={
            round?.maos[0].cartas.filter((card) => card.rodada === null) || []
          }
          onClick={onCardClick}
        />
      </S.Hand>
      <S.Stack>
        <Stack stackCount={3} />
      </S.Stack>
      <S.StartArea>
        {game?.status === Status.ready && (
          <Button onClick={onStart}>Start</Button>
        )}
      </S.StartArea>
      <S.TrucoArea>
        <Button color="primary" size="medium" onClick={handleClick}>
          {message}
        </Button>
      </S.TrucoArea>
    </S.Wrapper>
  );
};

export default Game;
