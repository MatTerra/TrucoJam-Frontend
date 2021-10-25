import { navigate } from "@reach/router";
import axios from "axios";
import Button from "components/Button";
import Input from "components/Input";
import MenuCard from "components/MenuCard";
import { useState } from "react";
import { ImEnter } from "react-icons/im";
import { MdOutlineWidgets } from "react-icons/md";
import { api } from "services/api";
import PageTemplate from "templates/pageTemplate";
import { GameResult } from "templates/RoomPage";
import * as S from "./styles";

export const MenuPage = () => {
  const [createError, setCreateError] = useState("");

  const [roomPassword, setRoomPassword] = useState("");

  const newGame = async () => {
    try {
      const res = await (await api()).post<GameResult>("/", {
        senha: roomPassword,
      });
      if (res.data.success) {
        navigate("/room/" + res.data.data.Game.id_);
        return;
      }

      setCreateError(res.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setCreateError(
          (error as any)?.response?.data?.message || "unexpected error"
        );
      }
    }
  };

  const [showPwdInput, setShowPwdInput] = useState(false);

  return (
    <PageTemplate>
      <div>
        <S.H1>Truco Jam</S.H1>
        <h3>Let's play! But first choose:</h3>
      </div>
      <S.ButtonsArea>
        <S.NewGame>
          <MenuCard
            Icon={MdOutlineWidgets}
            onClick={() => setShowPwdInput(true)}
          >
            Host a new game
          </MenuCard>
          {showPwdInput && (
            <S.InputLine>
              <Input
                label="Enter the room's password"
                type="password"
                placeholder="leave it blank if you want"
                value={roomPassword}
                onChange={(e) => {
                  setRoomPassword(e.target.value);
                }}
              ></Input>
              <Button color="secondary" onClick={newGame}>
                ok
              </Button>
            </S.InputLine>
          )}
          {createError && <S.Error>{createError}</S.Error>}
        </S.NewGame>
        <MenuCard
          Icon={ImEnter}
          text="Join room"
          onClick={() => navigate("/join")}
        ></MenuCard>
      </S.ButtonsArea>
    </PageTemplate>
  );
};
