import { SendJsonMessage } from "react-use-websocket/dist/lib/types";

export const findMatch = () => {
  sendJsonMessage({
    type: 1,
    payload: {
      gameType: "chess",
    },
  }: JSON);
};
