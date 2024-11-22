import { useState, useEffect } from "react";
import Chessboard from "../components/Chessboard";
import Button from "../components/Button";
import { Chess } from "chess.js";

const Game = () => {
  const [message, setMessage] = useState<string>("");
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.board());
  const [log, setLog] = useState<boolean>(true);

  useEffect(() => {
    switch (message) {
      case "init game":
        setChess(new Chess());
        setBoard(chess.board());
        console.log("Game initialized");
        break;
    }
  }, [chess, message]);

  return (
    <div className="justify-center flex">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 w-full">
            <Chessboard board={board} />
          </div>
          <div className="col-span-2 w-full bg-zinc-700 rounded-xl lg:p-8">
            <Button
              onClick={(): void => setLog(!log)}
              children={log ? "Chat Online" : "Logs"}
            />
            <div className="bg-primary-light mt-8 rounded-md p-3 h-3/4">
              {log ? (
                <div className="flex justify-between w-3/4">
                  <div className="text-white flex gap-1">
                    <p>1.</p>
                  </div>
                  <div className="text-white flex gap-1">
                    <p>a6</p>
                  </div>
                  <div className="text-white flex gap-1">
                    <p>f8</p>
                  </div>
                </div>
              ) : (
                <div className="text-white flex flex-col">
                  <div className="bg-receiver-chat w-fit py-1 px-2 rounded-2xl self-start">
                    <p>Hey</p>
                  </div>
                  <div className="bg-sender-chat w-fit py-1 px-2 rounded-2xl self-end">
                    <p>Hey</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;