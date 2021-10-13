import { CgProfile } from "react-icons/cg";
import * as S from "./styles";

export interface IUserDisplay {
  username: string;
  userTurn: boolean;
}

const UserDisplay = ({ username, userTurn }: IUserDisplay) => (
  <S.Wrapper active={userTurn}>
    <S.IconContent>
      <CgProfile size={"2.5em"} color="grey" />
    </S.IconContent>
    <S.Label>{username}</S.Label>
  </S.Wrapper>
);

export default UserDisplay;
