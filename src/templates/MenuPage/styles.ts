import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const H1 = styled.h1`
  color: white;
`;

export const ButtonsArea = styled.div`
  grid-auto-flow: row dense;
  grid-row-gap: 5em;
  max-width: 480px;
  justify-content: center;
  margin: auto;
`;

export const NewGame = styled.div`
  margin-bottom: 4em;
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.palette.primary.main};
    font-weight: bold;
  `}
`;

export const InputLine = styled.div`
  display: flex;
  align-items: flex-end;
  > :first-child {
    flex-basis: 90%;
  }
`;
