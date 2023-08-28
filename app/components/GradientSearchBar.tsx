import Fuse from "fuse.js";
import { BUILDINGS } from "../lib/constants/buildings";
import { Building, Room } from "../lib/types";
import { useState } from "react";
import { ObjectState } from "../lib/state";

interface GradientSearchBarProps {
  results: ObjectState<(Building | Room)[]>;
}
export default function GradientSearchBar(props: GradientSearchBarProps) {
  const [duration, setDuration] = useState<number>(0);

  return (
    <div className="flex flex-col items-start">
      <div className="relative mt-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md">
        <input
          onChange={(e) => {
            const value: string = e.target.value;
            if (!value) return props.results.set(Object.values(BUILDINGS));

            const startTime: number = new Date().getMilliseconds();
            const result = fuzzySearch(value);
            const endTime: number = new Date().getMilliseconds();

            setDuration(endTime - startTime);

            props.results.set(result);
          }}
          placeholder="Search"
          className="m-0.5 h-12 rounded-xl bg-slate-950 p-4 tracking-wide text-slate-400 ring-0 placeholder:text-slate-400 focus:outline-none focus:ring-0 sm:w-96"
        />
      </div>
      <p className="ml-1 mt-2 text-slate-500">
        Found {props.results.value.length} results in {duration}ms
      </p>
    </div>
  );
}

const fuzzySearch = (query: string): (Building | Room)[] => {
  const buildings = fuzzySearchBuildings(query);
  const rooms = fuzzySearchRooms(query);

  return [...buildings, ...rooms].map((result) => result.item);
};

const fuzzySearchBuildings = (query: string) => {
  const values: Building[] = Object.values(BUILDINGS);

  const fuse = new Fuse(values, {
    keys: ["name", "type", "short"],
  });

  return fuse.search(query);
};

const fuzzySearchRooms = (query: string) => {
  const buildings: Building[] = Object.values(BUILDINGS);

  // Iterate over the buildings and add the rooms to the array
  let rooms: Room[] = [];
  buildings.forEach((building: Building) => {
    rooms.push(
      ...building.rooms.map((roomName: string) => ({
        name: roomName,
        short: roomName,
        href: `/rooms/${roomName}`,
        type: "Room",
      })),
    );
  });

  const fuse = new Fuse(rooms, {
    keys: ["name"],
  });

  return fuse.search(query);
};
