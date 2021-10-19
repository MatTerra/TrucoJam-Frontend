import { navigate } from "@reach/router";
import JoinCard from "components/JoinCard";
import PageTemplate from "templates/pageTemplate";
import * as S from "./styles";

export const JoinPage = () => {
  const roomNumber = '12345';

  const joinGameClick = () => {
    navigate("/room/"+ roomNumber);
  };

  return (
    <PageTemplate>
      <div>
        <S.H1>Truco Jam</S.H1>
        <h3>Let's play! Enter the room's code:</h3>
      </div>
      <S.ButtonsArea>
        <JoinCard
          label="Enter the room's code"
          onClick={joinGameClick}
        ></JoinCard>
      </S.ButtonsArea>
    </PageTemplate>
  );
};
