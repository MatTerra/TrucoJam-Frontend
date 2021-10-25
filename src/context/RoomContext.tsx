import React, { createContext, Dispatch, useCallback, useContext } from "react";
import { Game } from "templates/RoomPage";

type RoomContextType = {
  game?: Game;
  setGame: Dispatch<Game | undefined>;
  resetGame: () => void;
};

export const roomContextDefaultValues: RoomContextType = {
  setGame: () => {},
  resetGame: () => {},
};

export const RoomContext = createContext<RoomContextType>(
  roomContextDefaultValues
);

export const RoomProvider: React.FC = ({ children }) => {
  const [game, setGame] = React.useState<Game | undefined>();
  const resetGame = useCallback(() => {
    setGame(undefined);
  }, [setGame]);

  return (
    <>
      <RoomContext.Provider
        value={{
          game,
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
