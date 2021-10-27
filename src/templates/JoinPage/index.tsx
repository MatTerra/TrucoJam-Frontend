import { navigate } from "@reach/router";
import JoinCard from "components/JoinCard";
import { useRoom } from "context/RoomContext";
import { api } from "services/api";
import PageTemplate from "templates/pageTemplate";
import { GameResult } from "templates/RoomPage";
import * as S from "./styles";

export const JoinPage = () => {
  const { setGame } = useRoom();

  const joinGameClick = async (roomID: string, password: string) => {
    if (roomID.length > 0) {
      try {
        const res = await (await api()).put<GameResult>(`/${roomID}/join`, {
          senha: password,
        });
        setGame(res.data.data.Game);
        navigate("/room/" + roomID);
      } catch (e: any) {
        if (JSON.parse(JSON.stringify(e))?.status === 401) {
          navigate("/");
        }
      }
    }
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
