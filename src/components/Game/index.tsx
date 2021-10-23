import Ally from "components/Ally";
import Rival from "components/Rival";
import * as S from "./styles";

const Game = () => (
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
    <S.Hand>Hand</S.Hand>
    <S.Stack>Stack</S.Stack>
  </S.Wrapper>
);

export default Game;