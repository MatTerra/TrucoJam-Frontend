import UserDisplay from "components/UserDisplay";
import * as S from "./styles";

export interface ITeamListProps {
  players?: [string, string];
  isLoading: boolean;
}

const TeamList = ({ players, isLoading }: ITeamListProps) => {
  const playersToMap = [...Array(2).fill(0)].map((_, idx) =>
    players?.[idx] || isLoading ? "loading" : "available"
  );

  const getStatus = (playerName: string) => {
    switch (playerName) {
      case "loading":
      case "available":
        return playerName as "loading" | "available";
      default:
        return "unavailable";
    }
  };

  return (
    <S.Wrapper>
      {playersToMap.map((player, idx) => (
        <UserDisplay
          key={player + idx}
          username={isLoading ? "loading" : player}
          userTurn={false}
          status={getStatus(player)}
        ></UserDisplay>
      ))}
    </S.Wrapper>
  );
};

export default TeamList;
