import Room from "components/Room";
import { Round, useRoom } from "context/RoomContext";
import useRequest from "hooks/useRequest";
import { useEffect } from "react";

interface IRoomPageProps {
  roomId: string;
}

export interface Game {
  creation_datatime: Date;
  id_: string;
  jogadores: string[];
  last_modified_datetime: Date;
  partidas: Array<Round>;
  pontuacao: [number, number];
  senha: "";
  status: number;
  times: [[string, string], [string, string]];
}
export interface GameResult {
  data: {
    Game: Game;
  };
  message: string;
  success: boolean;
}

export const RoomPage = (props: IRoomPageProps) => {
  const { data, isLoading } = useRequest<GameResult>("/" + props.roomId);
  const { setGame } = useRoom();

  useEffect(() => {
    setGame(data?.data.Game);
  }, [data, setGame]);

  return (
    <Room id={props.roomId} isLoading={isLoading || data === undefined}></Room>
  );
};
