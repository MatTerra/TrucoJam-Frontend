/*import { navigate } from "@reach/router";
import { useState } from "react";
import JoinCard from "components/JoinCard";
import PageTemplate from "templates/pageTemplate";
import * as S from "./styles";

export const JoinPage = () => {
  const [roomID, setRoomID] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [correctPwd, setCorrectPwd] = useState(false);

  const joinGameClick = () => {
    if(correctPwd){
      navigate("/room/"+ roomID);
    }else{
      
    }    
  };

  return (
    <PageTemplate>
      <div>
        <S.H1>Truco Jam</S.H1>
        <h3>Let's play! Enter the room's code:</h3>
      </div>
      <S.ButtonsArea>
        <JoinCard
          label="Enter the room's code"
          onClick={joinGameClick}
          id={roomID}
          onChangeID={(e) => {
            setRoomID(e.target.value);
          }}
          password={roomID}
          onChangePassword={(e) => {
            setRoomPassword(e.target.value);
          }}
        ></JoinCard>
      </S.ButtonsArea>
    </PageTemplate>
  );
};*/

export {};
