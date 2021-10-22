import styled, { css } from "styled-components";

export const Wrapper = styled.div<{
  active: boolean;
  status: "available" | "loading" | "unavailable";
}>`
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 6px 6px;
  justify-items: start;
  align-items: center;
  width: 100%;
  min-width: 16rem;
  border-radius: 8px;

  ${({ theme, active }) => css`
    background-color: ${active
      ? "rgba(242, 38, 38, 0.6);"
      : `rgba(226, 114, 114, 0.6);`};
    box-shadow: ${active
      ? `0px 4px 4px rgba(0, 0, 0, 0.25);`
      : `inset 0px 4px 4px rgba(0, 0, 0, 0.25);`};
  `}
  cursor: pointer;
  &:hover {
    background-color: ${({ status }) =>
      status === "available" ? "#bc3015" : "initial"};
  }
`;

export const IconContent = styled.div`
  margin-left: 5px;
  margin-top: 6px;
  width: 100%;
`;

export const Label = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 1.5em;
  ${({ theme }) => css`
    color: ${theme.palette.primary.contrastText};
  `}
`;
