import { CgProfile } from "react-icons/cg";
import * as S from "./styles";

export interface IUserDisplay {
  username: string;
  userTurn: boolean;
  status: "available" | "loading" | "unavailable";
}

const UserDisplay = ({ username, userTurn, status }: IUserDisplay) => (
  <S.Wrapper active={userTurn} status={status}>
    <S.IconContent>
      <CgProfile size={"2.5em"} color="grey" />
    </S.IconContent>
    <S.Label>{username}</S.Label>
  </S.Wrapper>
);

export default UserDisplay;
