import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    "Header  Header  . "
    ".  signin  .";
  padding-bottom: 10%;
`;

export const H1 = styled.h1`
  margin: 8% 5%;
  color: white;
  grid-area: Header;
`;

export const SignInArea = styled.div`
  grid-area: signin;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const A = styled.a`
  color: white;
`;
