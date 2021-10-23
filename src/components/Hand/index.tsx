import React, { MouseEventHandler } from "react";
import * as S from "./styles";

export interface HandProps {
  handCount: number;
  onClick?: MouseEventHandler;
}

const Hand = ({ handCount, onClick }: HandProps) => (
  <S.Wrapper>
    {[...Array(handCount).fill(0)].map((_, idx) => (
        <S.CardLine>
          <img
            key={"ally-card-" + idx}
            src="/assets/cards/card-back4.png"
            alt="Carta do jogador"
            onClick={onClick}
          ></img>
        </S.CardLine>
    ))}
  </S.Wrapper>
);

export default Hand;
