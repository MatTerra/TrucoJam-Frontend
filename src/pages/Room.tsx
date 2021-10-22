import { RouteComponentProps, useNavigate } from "@reach/router";
import { RoomPage } from "templates/RoomPage";

interface IRoomProps extends RouteComponentProps {
  roomId?: string;
}

export function Room({ roomId }: IRoomProps) {
  const nav = useNavigate();

  if (!roomId) {
    nav("/notFound");
    return null;
  }
  return <RoomPage roomId={roomId} />;
}
