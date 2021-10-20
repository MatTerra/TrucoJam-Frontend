import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons/lib";
import * as S from "./styles";

export interface IMenuCardProps {
  Icon?: IconType;
  text?: string;
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
}

const MenuCard = ({ children, text, Icon, onClick }: IMenuCardProps) => (
  <S.Wrapper onClick={onClick}>
    {Icon && (
      <S.IconContent>
        <Icon
          size="3.5em"
          color="white"
          style={{ padding: "10% 10%", marginTop: "5%" }}
        />
      </S.IconContent>
    )}
    <S.Label>{children || text}</S.Label>
  </S.Wrapper>
);

export default MenuCard;
