import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ active: boolean }>`
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 6px 6px;
  justify-items: start;
  align-items: center;
  width: 250px;

  ${({ theme, active }) => css`
    background-color: ${theme.palette.primary.main};
    box-shadow: ${active
      ? `rgba(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.2) -3px -3px 6px 5px inset;'`
      : `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    `};
  `}

  border-radius: 5px;
  border-width: 0;
`;

export const IconContent = styled.div`
  margin-left: 5px;
  margin-top: 6px;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 0.5em;
  ${({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
  `}
`;
