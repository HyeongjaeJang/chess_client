import { createContext, ReactNode, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { SendJsonMessage } from "react-use-websocket/dist/lib/types";

interface WsCtx {
  sendJsonMessage: SendJsonMessage;
  lastJsonMessage: any;
  readyState: ReadyState;
}

const WebSocketContext = createContext<WsCtx | null>(null);

export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  const WS_URL = "ws://localhost:4444/ws";
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    WS_URL,
    {
      share: false,
      shouldReconnect: () => true,
      onOpen: (e) => {
        console.log("opened....");
        sendJsonMessage({
          type: 0,
          payload: {
            hello: "world",
          },
        });
      },
    },
  );

  useEffect(() => {
    console.log(lastJsonMessage);
  }, [lastJsonMessage]);

  return (
    <WebSocketContext.Provider
      value={{ sendJsonMessage, lastJsonMessage, readyState }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
