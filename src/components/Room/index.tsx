import TeamList from "components/TeamList";
import * as S from "./styles";

export interface IRoomProps {
  id: string;
}
const Room = ({ id }: IRoomProps) => (
  <S.Wrapper>
    <S.Title>Room {id}</S.Title>
    <S.TeamA>
      <S.Span>Team A</S.Span>
      <TeamList players={["1", "2"]}></TeamList>
    </S.TeamA>
    <S.Game></S.Game>
    <S.TeamB>
      <S.Span>Team B</S.Span>
      <TeamList players={["3", "4"]}></TeamList>
    </S.TeamB>
  </S.Wrapper>
);

export default Room;
