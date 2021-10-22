import Room from "components/Room";
import useRequest from "hooks/useRequest";

interface IRoomPageProps {
  roomId: string;
}

export interface GameResult {
  Game: {
    creation_datatime: Date;
    id_: string;
    jogadores: string[];
    last_modified_datetime: Date;
    partidas: Array<any>;
    pontuacao: [number, number];
    senha: "";
    status: number;
    times: [[string, string], [string, string]];
  };
}

export const RoomPage = (props: IRoomPageProps) => {
  const { data, isLoading } = useRequest<GameResult>("/" + props.roomId);

  return (
    <Room id={props.roomId} gameResult={data} isLoading={isLoading}></Room>
  );
};
