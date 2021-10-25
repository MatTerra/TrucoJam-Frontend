import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    ". roomtitle ."
    "teamA game game"
    "teamB game game";
  height: 100%;
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
  `}

  padding: 16px;
`;

export const Title = styled.h1`
  grid-area: roomtitle;

  ${({ theme }) => css`
    color: ${theme.palette.common.white};
  `}

  text-align: center;
`;

export const TeamA = styled.div`
  grid-area: teamA;
  background-color: transparent;

  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const TeamB = styled.div`
  grid-area: teamB;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Game = styled.div`
  grid-area: game;
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.palette.common.white};
  `}

  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  margin: 1em 0;
`;
