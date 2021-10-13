import Room from "components/Room";

interface IRoomPageProps {
  roomId: string;
}

export const RoomPage = (props: IRoomPageProps) => {
  return <Room id={props.roomId}></Room>;
};
