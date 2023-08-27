interface RoomInfo {
  type: string;
  seating: string;
  capacity: number;
}
export interface Room {
  name: string;
  type: string;
  short: string;
  href: string;
  image: string;
  info: RoomInfo;
}

export interface Building {
  name: string;
  type: string;
  image: string;
  short: string;
  href: string;
  rooms: string[]; // Room names
}

export interface Step {
  description: string;
  image: string;
}
