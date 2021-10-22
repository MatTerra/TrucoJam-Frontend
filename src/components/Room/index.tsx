import TeamList from "components/TeamList";
import { GameResult } from "templates/RoomPage";
import * as S from "./styles";

export interface IRoomProps {
  id: string;
  gameResult?: GameResult;
  isLoading: boolean;
}
const Room = ({ id, gameResult, isLoading }: IRoomProps) => (
  <S.Wrapper>
    <S.Title>Room {id}</S.Title>
    <S.TeamA>
      <S.Span>Team A</S.Span>
      <TeamList
        isLoading={isLoading}
        players={gameResult?.Game.times[0]}
      ></TeamList>
    </S.TeamA>
    <S.Game></S.Game>
    <S.TeamB>
      <S.Span>Team B</S.Span>
      <TeamList
        isLoading={isLoading}
        players={gameResult?.Game.times[1]}
      ></TeamList>
    </S.TeamB>
  </S.Wrapper>
);

export default Room;
