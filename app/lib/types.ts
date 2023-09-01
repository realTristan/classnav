import { Dispatch, SetStateAction } from "react";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export interface RoomInfo {
  type: string;
  seating: string;
  capacity: number;
}

export interface Step {
  index?: number;
  description: string;
  image: string;
}

export interface Room {
  name: string;
  type: string;
  short: string;
  href: string;
  info?: RoomInfo;
}

export interface Building {
  name: string;
  type: string;
  image: string;
  short: string;
  href: string;
  address: string;
  rooms: string[]; // Room names
}
