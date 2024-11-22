import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const WebSocketContext = createContext({
  sendMessage: (message: string) => {},
});

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket("ws://localhost:4444/ws");

      ws.on = ("connect", () => console.log("connected"));

      ws.onclose = (event) => {
        console.log("Socket Closed Connection: ", event);
      };

      ws.onerror = (error) => console.error("Socket Error: ", error);

      setSocket(ws);
    };

    connect();

    return () => {
      if (socket) socket.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  };

  return (
    <WebSocketContext.Provider value={{ sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export default WebSocketProvider;
