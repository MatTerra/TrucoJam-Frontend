import React from "react";
import * as S from "./styles";

interface IPageTemplateProps {
  children: [React.ReactNode, React.ReactNode];
}

const PageTemplate: React.FC<IPageTemplateProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Heading>{children[0]}</S.Heading>
      <S.Content>{children[1]}</S.Content>
    </S.Wrapper>
  );
};
export default PageTemplate;
