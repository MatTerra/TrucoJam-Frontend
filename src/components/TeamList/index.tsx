import UserDisplay from "components/UserDisplay";
import * as S from "./styles";

export interface ITeamListProps {
  players: [string, string];
}

const TeamList = ({ players }: ITeamListProps) => (
  <S.Wrapper>
    {players.map((player) => (
      <UserDisplay username={player} userTurn={false}></UserDisplay>
    ))}
  </S.Wrapper>
);

export default TeamList;
