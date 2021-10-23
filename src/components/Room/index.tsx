import Game from "components/Game";
import TeamList from "components/TeamList";
import { Game as GameData } from "templates/RoomPage";
import * as S from "./styles";
export interface IRoomProps {
  id: string;
  gameResult?: GameData;
  isLoading: boolean;
}
const Room = ({ id, gameResult, isLoading }: IRoomProps) => (
  <S.Wrapper>
    <S.Title>Room {id}</S.Title>
    <S.TeamA>
      <S.Span>Team A</S.Span>
      <TeamList
        roomId={id}
        team="A"
        isLoading={isLoading}
        players={gameResult?.times[0]}
      ></TeamList>
    </S.TeamA>
    <S.Game>
      <Game></Game>
    </S.Game>
    <S.TeamB>
      <S.Span>Team B</S.Span>
      <TeamList
        roomId={id}
        team="B"
        isLoading={isLoading}
        players={gameResult?.times[1]}
      ></TeamList>
    </S.TeamB>
  </S.Wrapper>
);

export default Room;
