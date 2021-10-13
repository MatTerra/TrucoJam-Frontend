import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;

  grid-template-areas:
    ". roomtitle ."
    "teamA game game"
    "teamB game game"
    ". cards cards";

  ${({ theme }) => css`
    background-color: ${theme.palette.common.white};
    border-radius: ${theme.borderRadius};
  `}

  padding: 16px;
`;

export const Title = styled.h1`
  grid-area: roomtitle;
`;

export const TeamA = styled.div`
  grid-area: teamA;
`;

export const TeamB = styled.div`
  grid-area: teamB;
`;

export const Game = styled.div`
  grid-area: game;
`;
