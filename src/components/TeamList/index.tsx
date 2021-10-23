import UserDisplay from "components/UserDisplay";
import { useRoom } from "context/RoomContext";
import { useState } from "react";
import { api } from "services/api";
import { GameResult } from "templates/RoomPage";
import * as S from "./styles";

enum Team {
  A,
  B,
}
export interface ITeamListProps {
  roomId: string;
  team: "A" | "B";
  players?: [string, string];
  isLoading: boolean;
}

const TeamList = ({ roomId, players, isLoading, team }: ITeamListProps) => {
  const playersToMap = [...Array(2).fill(0)].map(
    (_, idx) => players?.[idx] || (isLoading ? "loading" : "available")
  );

  const { setGame } = useRoom();

  const [error, setError] = useState("");
  const getStatus = (playerName: string) => {
    switch (playerName) {
      case "loading":
      case "available":
        return playerName as "loading" | "available";
      default:
        return "unavailable";
    }
  };

  const onClick = async () => {
    try {
      const res = await (await api()).put<GameResult>(
        `/${roomId}/join-team/${Team[team]}`
      );
      setGame(res.data.data.Game);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  return (
    <S.Wrapper>
      {playersToMap.map((player, idx) => (
        <UserDisplay
          key={player + idx}
          username={isLoading ? "loading" : player.slice(0, 13)}
          userTurn={false}
          status={getStatus(player)}
          onClick={() => onClick()}
        ></UserDisplay>
      ))}
    </S.Wrapper>
  );
};

export default TeamList;
