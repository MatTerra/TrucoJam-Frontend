import { MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";
import * as S from "./styles";

export interface IMenuCardProps {
  Icon: IconType;
  text: string;
  onClick?: MouseEventHandler;
}

const MenuCard = ({ text, Icon, onClick }: IMenuCardProps) => (
  <S.Wrapper onClick={onClick}>
    <S.IconContent>
      <Icon
        size="3.5em"
        color="white"
        style={{ padding: "10% 10%", marginTop: "5%" }}
      />
    </S.IconContent>
    <S.Label>{text}</S.Label>
  </S.Wrapper>
);

export default MenuCard;
