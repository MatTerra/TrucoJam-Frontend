import { MouseEventHandler} from "react";
import * as S from "./styles";

export interface IJoinCardProps {
  label: string;
  onClick?: MouseEventHandler;
}

const JoinCard = ({ label, onClick }: IJoinCardProps) => (
  <S.Wrapper>
    <S.Label>{label}</S.Label>
    <S.Input placeholder="Room's code"/>
    <S.Button onClick={onClick}>Join</S.Button>
  </S.Wrapper>
);

export default JoinCard;
