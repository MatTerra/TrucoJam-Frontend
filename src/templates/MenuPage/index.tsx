import { navigate } from "@reach/router";
import MenuCard from "components/MenuCard";
import { ImEnter } from "react-icons/im";
import { MdOutlineWidgets } from "react-icons/md";
import PageTemplate from "templates/pageTemplate";
import * as S from "./styles";

export const MenuPage = () => {
  const newGame = () => {
    return "123456";
  };

  const hostGameClick = () => {
    const roomNumber = newGame();
    navigate("/room/" + roomNumber);
  };

  const JoinGameClick = () => {
    navigate("/join");
  };

  return (
    <PageTemplate>
      <div>
        <S.H1>Truco Jam</S.H1>
        <h3>Let's play! But first choose:</h3>
      </div>
      <S.ButtonsArea>
        <MenuCard
          Icon={MdOutlineWidgets}
          text="Host a new game"
          onClick={hostGameClick}
        ></MenuCard>
        <MenuCard Icon={ImEnter} text="Join room" onClick={JoinGameClick}></MenuCard>
      </S.ButtonsArea>
    </PageTemplate>
  );
};
