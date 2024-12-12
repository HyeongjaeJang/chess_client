import { SendJsonMessage } from "react-use-websocket/dist/lib/types";
import { EventPayloadType, eventTypes } from "../types";

export const FindMatchHandler = (sender: SendJsonMessage) => {
  sender({ type: eventTypes.FindMatch, payload: {} } as EventPayloadType);

  console.log("sending find match event...");
};
