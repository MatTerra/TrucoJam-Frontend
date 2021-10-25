import { Card } from "components/Game/cards";
import React, {
  createContext,
  Dispatch,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { api } from "services/api";
import { Game } from "templates/RoomPage";

type RoomContextType = {
  game?: Game;
  round?: Round;
  setGame: Dispatch<Game | undefined>;
  setRound: Dispatch<Round | undefined>;
  resetGame: () => void;
};
export interface Round {
  maos: [{ cartas: Card[]; jogador: string }];
  may_raise: true;
  turno: number;
  valor: number;
  vencedor: string | null;
}
export interface RoundResult {
  data: { partida: Round };
  message: string;
  success: boolean;
}

export const roomContextDefaultValues: RoomContextType = {
  setGame: () => {},
  setRound: () => {},
  resetGame: () => {},
};

export const RoomContext = createContext<RoomContextType>(
  roomContextDefaultValues
);

export const RoomProvider: React.FC = ({ children }) => {
  const [game, setGame] = React.useState<Game | undefined>();
  const [round, setRound] = React.useState<Round | undefined>();

  const resetGame = useCallback(() => {
    setGame(undefined);
  }, [setGame]);

  useEffect(() => {
    const getRound = async () => {
      try {
        const apiInstance = await api();
        const thisRound = await apiInstance.get<RoundResult>(
          `/${game?.id_ || 0}/partida`
        );
        if (thisRound.status === 204) {
          return;
        }
        setRound(thisRound.data.data.partida);
      } catch (error: any) {
        console.log(error);
      }
    };
    if (game) {
      getRound();
    }
    const intervalGet = setInterval(() => {
      if (game) {
        getRound();
      }
    }, 5000);

    // this will clear Timeout
    // when component unmount like in willComponentUnmount
    // and show will not change to true
    return () => {
      clearInterval(intervalGet);
    };
  }, [game]);

  return (
    <>
      <RoomContext.Provider
        value={{
          game,
          round,
          setRound,
          setGame,
          resetGame,
        }}
      >
        {children}
      </RoomContext.Provider>
    </>
  );
};

export function useRoom() {
  const context = useContext(RoomContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return {
    ...context,
  };
}
