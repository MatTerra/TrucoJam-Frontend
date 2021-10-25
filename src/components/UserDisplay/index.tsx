import { MouseEventHandler } from "react";
import { CgProfile } from "react-icons/cg";
import * as S from "./styles";

export interface IUserDisplay {
  username: string;
  userTurn: boolean;
  status: "available" | "loading" | "unavailable";
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const UserDisplay = ({ username, userTurn, status, onClick }: IUserDisplay) => (
  <S.Wrapper active={userTurn} status={status} onClick={onClick}>
    <S.IconContent>
      <CgProfile size={"2.5em"} color="grey" />
    </S.IconContent>
    <S.Label>{username}</S.Label>
  </S.Wrapper>
);

export default UserDisplay;
 