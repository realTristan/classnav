export interface Room {}

export interface Building {
  name: string;
  type: string;
  short: string;
  href: string;
  rooms: Room[];
}
