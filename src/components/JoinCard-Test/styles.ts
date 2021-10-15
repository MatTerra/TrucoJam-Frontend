import styled from "styled-components";

export const Wrapper = styled.button`
  display: grid;
  grid-template-columns: 20% 80%;

  justify-items: center;
  align-items: center;
  width: 250px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border-width: 0;
`;

export const IconContent = styled.div`
  position: relative;
  background-color: black;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;

  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 20;
    width: 2px;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const Label = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 0.5em;
`;
