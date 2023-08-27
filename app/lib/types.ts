interface RoomInfo {
  type: string;
  seating: string;
  capacity: number;
}
export interface Step {
  description: string;
  image: string;
}

export interface Room {
  name: string;
  type: string;
  short: string;
  href: string;
  image: string;
  info: RoomInfo;
  steps: Step[];
}

export interface Building {
  name: string;
  type: string;
  image: string;
  short: string;
  href: string;
  rooms: string[]; // Room names
}
