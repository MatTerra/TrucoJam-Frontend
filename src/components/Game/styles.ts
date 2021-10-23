import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    ". ally ."
    "rival0 cards rival1"
    ". hand .";

  height: 100%;
  padding: 1em 3em;
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
