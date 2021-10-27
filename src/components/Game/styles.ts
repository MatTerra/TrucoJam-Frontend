import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    ". score ."
    ". ally start"
    "rival0 cards rival1"
    ". hand truco";

  height: 100%;
  padding: 1em 3em;
`;

export const Score = styled.div`
  grid-area: score;
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: white;
`;

export const Rival0 = styled.div`
  align-self: center;
  grid-area: rival0;
`;

export const Rival1 = styled.div`
  grid-area: rival1;
  text-align: right;
  align-self: center;
`;

export const Ally = styled.div`
  grid-area: ally;
  text-align: center;
  align-self: flex-start;
`;

export const Hand = styled.div`
  grid-area: hand;
  align-self: flex-end;
  text-align: center;
`;

export const Stack = styled.div`
  grid-area: cards;
  align-self: center;
  text-align: center;
`;

export const TrucoArea = styled.div`
  grid-area: truco;
  align-self: center;
  text-align: center;
`;

export const StartArea = styled.div`
  grid-area: start;
  text-align: center;
`;
