import MenuCard from "components/MenuCard";
import { ImEnter } from "react-icons/im";
import { MdOutlineWidgets } from "react-icons/md";
import PageTemplate from "templates/pageTemplate";
import * as S from "./styles";

export const MenuPage = () => {
  return (
    <PageTemplate>
      <div>
        <S.H1>Truco Jam</S.H1>
        <h3>Let's play! But first choose:</h3>
      </div>
      <S.ButtonsArea>
        <MenuCard Icon={MdOutlineWidgets} text="Host a new game"></MenuCard>
        <MenuCard Icon={ImEnter} text="Join room"></MenuCard>
      </S.ButtonsArea>
    </PageTemplate>
  );
};
