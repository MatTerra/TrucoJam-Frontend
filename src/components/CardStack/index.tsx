import Button from "components/Button";
import { Card, getCard } from "components/Game/cards";
import { useMemo, useState } from "react";
import * as S from "./styles";

export interface StackProps {
  history: { cartas: Card[]; jogador: string }[];
}

const Stack = ({ history }: StackProps) => {
  const [selectedRound, setSelectedRound] = useState(0 as 0 | 1 | 2);

  const cardsPerRound = useMemo(() => {
    const cardsPerPlayer: Card[][] = [[], [], []];
    history.forEach((player) =>
      player.cartas.forEach((carta) => {
        if (carta.rodada) {
          if (cardsPerPlayer[carta.rodada - 1]) {
            cardsPerPlayer[carta.rodada - 1].push(carta);
            return;
          }
        }
      })
    );
    return cardsPerPlayer;
  }, [history]);

  return (
    <S.Wrapper>
      {history.length ? (
        <S.RoundSelect>
          <div style={{ display: "block" }}>
            <Button onClick={() => setSelectedRound(0)}>0</Button>
            <Button onClick={() => setSelectedRound(1)}>1</Button>
            <Button onClick={() => setSelectedRound(2)}>2</Button>
          </div>
          {cardsPerRound[selectedRound].map((card, idx) => (
            <img
              key={"ally-card-" + idx + card.naipe + card.valor}
              src={`/assets/cards/${getCard(card.naipe, card.valor)}`}
              alt="Carta ao revés imagem verde pixelada"
            ></img>
          ))}
        </S.RoundSelect>
      ) : null}
    </S.Wrapper>
  );
};

export default Stack;
