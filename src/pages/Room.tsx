import { RouteComponentProps, useNavigate } from "@reach/router";
import { RoomProvider } from "context/RoomContext";
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
  return (
    <RoomProvider>
      <RoomPage roomId={roomId} />
    </RoomProvider>
  );
}
