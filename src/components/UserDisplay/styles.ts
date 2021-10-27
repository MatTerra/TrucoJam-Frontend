import styled, { css } from "styled-components";

const defaultColor = (
  active: boolean,
  status: "available" | "loading" | "unavailable"
) => {
  if (!active && status !== "unavailable") {
    return "#bc3015;";
  }
  if (!active && status === "unavailable") {
    return "rgba(226, 114, 114, 0.6);";
  }

  if (active && status === "unavailable") {
    return "#bc3015;";
  }

  if (active) {
    return "#bc3015;";
  }

  if (status === "unavailable") {
    return "#bc3015;";
  }

  return "rgba(226, 114, 114, 0.6);";
};

export const Wrapper = styled.div<{
  active: boolean;
  status: "available" | "loading" | "unavailable";
}>`
  display: grid;
  grid-template-columns: 20% 80%;
  justify-items: start;
  align-items: center;
  width: 100%;
  min-width: 16rem;
  border-radius: 8px;
  padding: 0.5em 1em;
  ${({ theme, active, status }) => css`
    background-color: ${defaultColor(active, status)};
    box-shadow: ${active
      ? `0px 4px 4px rgba(0, 0, 0, 0.25);`
      : `inset 0px 4px 4px rgba(0, 0, 0, 0.25);`};
  `}
  cursor: pointer;
  &:hover {
    background-color: ${({ status, active }) =>
      status === "available" ? "#bc3015" : defaultColor(active, status)};
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
