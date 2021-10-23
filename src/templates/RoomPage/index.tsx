import Room from "components/Room";
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
  partidas: Array<any>;
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

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Room
      id={props.roomId}
      gameResult={data?.data.Game}
      isLoading={isLoading || data === undefined}
    ></Room>
  );
};
