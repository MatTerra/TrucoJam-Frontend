import Button from "components/Button";
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
  current: 0 | 1 | undefined;
}

const TeamList = ({
  roomId,
  players,
  isLoading,
  team,
  current,
}: ITeamListProps) => {
  const playersToMap = [...Array(2).fill(0)].map(
    (_, idx) => players?.[idx] || (isLoading ? "loading" : "available")
  );

  const { setGame } = useRoom();

  const [, setError] = useState("");
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
    } catch (e: any) {
      setError(e);
      console.log(e);
    }
  };

  const onAddBot = async () => {
    try {
      const res = await (await api()).put<GameResult>(
        `/${roomId}/bot-team/${Team[team]}`
      );
      setGame(res.data.data.Game);
    } catch (e: any) {
      setError(e);
      console.log(e);
    }
  };

  return (
    <S.Wrapper>
      {playersToMap.map((player, idx) => {
        return (
          <UserDisplay
            key={player + idx}
            username={isLoading ? "loading" : player.slice(0, 13)}
            userTurn={current === idx}
            status={getStatus(player)}
            onClick={() => onClick()}
          ></UserDisplay>
        );
      })}
      {(players?.length || 0) < 2 && (
        <Button fullWidth color="secondary" onClick={onAddBot}>
          Add bot
        </Button>
      )}
    </S.Wrapper>
  );
};

export default TeamList;
