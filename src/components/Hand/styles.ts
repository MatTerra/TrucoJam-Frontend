import styled from "styled-components";

export const Card = styled.img`
  align-self: center;
  &:hover {
    cursor: pointer;
    transition: transform 0.2s;
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 3%;
`;
