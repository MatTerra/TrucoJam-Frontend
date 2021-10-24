import Ally from "components/Ally";
import Button from "components/Button";
import Stack from "components/CardStack";
import Hand from "components/Hand";
import Rival from "components/Rival";
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
    <S.TrucoArea>
      <Button color="primary" size="medium" onClick={handleClick}>
        {message}
      </Button>
    </S.TrucoArea>
  </S.Wrapper>
);

export default Game;
