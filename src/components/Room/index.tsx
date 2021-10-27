import Game from "components/Game";
import TeamList from "components/TeamList";
import { useRoom } from "context/RoomContext";
import * as S from "./styles";
export interface IRoomProps {
  id: string;
  isLoading: boolean;
}
const Room = ({ id, isLoading }: IRoomProps) => {
  const { game, round } = useRoom();

  const getCurrentPlayer = (team: "A" | "B") => {
    if (round) {
      switch (round.turno) {
        case 0:
        case 1:
          return team === "A" ? (round.turno as 0 | 1) : undefined;
        case 2:
        case 3:
          return team === "B" ? ((round.turno - 2) as 0 | 1) : undefined;
      }
    }
    return undefined;
  };

  const mayRaise = () => {
    if (round) {
      switch (round.turno) {
        case 0:
        case 1:
          return round.may_raise[0]!;
        case 2:
        case 3:
          return round.may_raise[1]!;
      }
    }
    return false;
  };

  return (
    <S.Wrapper>
      <S.Title>Room {id}</S.Title>
      <S.TeamA>
        <S.Span>Team A</S.Span>
        <TeamList
          current={getCurrentPlayer("A")}
          roomId={id}
          team="A"
          isLoading={isLoading}
          players={game?.times[0]}
        ></TeamList>
      </S.TeamA>
      <S.Game>
        <Game roomID={id} mayRaise={mayRaise()}></Game>
      </S.Game>
      <S.TeamB>
        <S.Span>Team B</S.Span>
        <TeamList
          current={getCurrentPlayer("B")}
          roomId={id}
          team="B"
          isLoading={isLoading}
          players={game?.times[1]}
        ></TeamList>
      </S.TeamB>
    </S.Wrapper>
  );
};

export default Room;
