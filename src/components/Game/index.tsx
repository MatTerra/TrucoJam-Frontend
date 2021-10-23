import Ally from "components/Ally";
import Hand from "components/Hand";
import Rival from "components/Rival";
import Stack from "components/CardStack";
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
    <S.Hand>
      <Hand handCount={3} />
    </S.Hand>
    <S.Stack>
      <Stack stackCount={3} />
      </S.Stack>
  </S.Wrapper>
);

export default Game;
