import { Card } from "context/RoomContext";
import * as S from "./styles";

export interface HandProps {
  cards: Card[];
  onClick?: (cardPosition: number) => void;
}

const Hand = ({ cards, onClick }: HandProps) => (
  <S.Wrapper>
    {cards.map((card, idx) => (
      <S.Card
        key={"ally-card-" + idx}
        src="/assets/cards/card-back4.png"
        alt="Carta do jogador"
        onClick={() => onClick && onClick(idx)}
      ></S.Card>
    ))}
  </S.Wrapper>
);

export default Hand;
