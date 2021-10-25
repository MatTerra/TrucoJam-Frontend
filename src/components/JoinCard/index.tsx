import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import * as S from "./styles";

export interface IJoinCardProps {
  label: string;
  onClick: (room: string, password: string) => void;
}

const JoinCard = ({ label, onClick }: IJoinCardProps) => {
  const [roomID, setRoomID] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onClick && onClick(roomID, password);
      }}
    >
      <S.Wrapper>
        <S.Label>{label}</S.Label>
        <Input
          style={{ marginLeft: "1em" }}
          placeholder="Room's code"
          value={roomID}
          onChange={(e) => setRoomID(e.target.value as string)}
        />
        <Input
          style={{ marginLeft: "1em" }}
          placeholder="you may leave this blank"
          label="Room's password"
          value={password}
          onChange={(e) => setPassword(e.target.value as string)}
        />
        <Button style={{ marginTop: "1em" }} type="submit">
          Join
        </Button>
      </S.Wrapper>
    </form>
  );
};

export default JoinCard;
