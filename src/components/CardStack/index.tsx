import * as S from "./styles";

export interface StackProps {
  stackCount: number;
}

const Stack = ({ stackCount }: StackProps) => (
  <S.Wrapper>
    {[...Array(stackCount).fill(0)].map((_, idx) => (
      <img
        key={"ally-card-" + idx}
        src="/assets/cards/card-back3.png"
        alt="Carta ao revés imagem verde pixelada"
      ></img>
    ))}
  </S.Wrapper>
);

export default Stack;
