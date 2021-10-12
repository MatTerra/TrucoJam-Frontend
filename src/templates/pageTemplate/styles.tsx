import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    "Header  Header  . "
    ".  content  .";
  padding-bottom: 10%;
`;

export const Heading = styled.div`
  margin: 8% 5%;
  color: white;
  grid-area: Header;
`;

export const Content = styled.div`
  grid-area: content;
`;
