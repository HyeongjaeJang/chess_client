export enum eventTypes {
  SendMessage = 0,
  FindMatch = 1,
  MatchInfo = 2,
  RematchReq = 3,
  RematchRes = 4,
  Resign = 5,
  MakeMove = 6,
}

interface SendMessage {
  message: string;
}

interface MakeMove {
  move: string;
  moves: string[];
}

export type EventPayloadType =
  | { type: eventTypes.SendMessage; payload: SendMessage }
  | { type: eventTypes.MakeMove; payload: MakeMove }
  | { type: eventTypes.FindMatch; payload: JSON };
