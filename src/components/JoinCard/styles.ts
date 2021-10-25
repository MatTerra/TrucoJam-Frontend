import styled from "styled-components";

export const Wrapper = styled.button`
  display: grid;
  grid-template-lines: 20% 50% 30%;

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

export const Label = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0.5em;
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
}))`
  border-radius: 3px;
  border: 1px solid black;
  display: block;
  margin: 1em 1em 1em;

  ::placeholder {
    color: black;
  }
`
export const Button = styled.button`
  justify-items: center;
  align-items: center;
  width: 50px;
  margin-bottom: 1em;
  color: white;
  background-color: paleblue;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  :hover {
    cursor: pointer;
  }
  border-radius: 5px;
  border-width: 0;
`;
