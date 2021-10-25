import * as S from "./styles";

export interface RivalProps {
  handCount: number;
}

const Rival = ({ handCount }: RivalProps) => (
  <S.Wrapper>
    {[...Array(handCount).fill(0)].map((_, idx) => (
      <img
        key={"Rival-card-" + idx}
        src="/assets/cards/card-back4.png"
        alt="Carta ao revés imagem laranja pixelada"
      ></img>
    ))}
  </S.Wrapper>
);

export default Rival;
