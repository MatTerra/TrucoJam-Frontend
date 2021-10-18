import { MouseEventHandler } from "react";
import * as S from "./styles";

export interface IJoinCardProps {
  text: string;
  onClick?: MouseEventHandler;
}

const JoinCard = ({ text, onClick }: IJoinCardProps) => (
  <S.Wrapper onClick={onClick}>
    <S.Label>{text}</S.Label>
  </S.Wrapper>
);

export default JoinCard;
