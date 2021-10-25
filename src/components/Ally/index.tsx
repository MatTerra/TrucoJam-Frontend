import * as S from "./styles";

export interface AllyProps {
  handCount: number;
}

const Ally = ({ handCount }: AllyProps) => (
  <S.Wrapper>
    {[...Array(handCount).fill(0)].map((_, idx) => (
      <img
        key={"ally-card-" + idx}
        src="/assets/cards/card-back3.png"
        alt="Carta ao revés imagem verde pixelada"
      ></img>
    ))}
  </S.Wrapper>
);

export default Ally;
