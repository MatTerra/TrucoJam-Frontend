import { Card, getCard } from "components/Game/cards";
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
        src={`/assets/cards/${getCard(card.naipe, card.valor)}`}
        alt="Carta do jogador"
        onClick={() => onClick && onClick(idx)}
      ></S.Card>
    ))}
  </S.Wrapper>
);

export default Hand;
