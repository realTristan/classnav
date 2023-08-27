import Fuse from "fuse.js";
import { BUILDINGS } from "../lib/constants/buildings";
import { ROOMS } from "../lib/constants/rooms";
import { Building, Room } from "../lib/types";
import { useState } from "react";

interface GradientSearchBarProps {
  results: any;
  setResults: any;
}
export default function GradientSearchBar(props: GradientSearchBarProps) {
  const [duration, setDuration] = useState<number>(0);

  return (
    <div className="flex flex-col items-start">
      <div className="relative mt-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md">
        <input
          onChange={(e) => {
            const value: string = e.target.value;
            if (!value) return props.setResults(Object.values(BUILDINGS));

            const startTime: number = new Date().getMilliseconds();
            const result = fuzzySearch(value);
            const endTime: number = new Date().getMilliseconds();

            setDuration(endTime - startTime);

            props.setResults(result.map((result) => result.item));
          }}
          placeholder="Search"
          className="m-0.5 h-12 w-96 rounded-xl bg-slate-950 p-4 tracking-wide text-slate-400 ring-0 placeholder:text-slate-400 focus:outline-none focus:ring-0"
        />
      </div>
      <p className="ml-1 mt-2 text-slate-500">
        Found {props.results.length} results in {duration}ms
      </p>
    </div>
  );
}

/**
 * Get the agents that match the query
 * @param agents The agents to search through
 * @param query The query to search for
 * @returns The agents that match the query
 */
const fuzzySearch = (query: string) => {
  type Result<T> = Fuse.FuseResult<T>[];

  const buildingsResult: Result<Building> = buildingsFuzzySearch(query);
  const roomsResult: Result<Room> = roomsFuzzySearch(query);

  return [...buildingsResult, ...roomsResult];
};

const buildingsFuzzySearch = (query: string) => {
  const values = Object.values(BUILDINGS);

  const fuse = new Fuse(values, {
    keys: ["name", "type", "short", "rooms"],
  });
  return fuse.search(query);
};

const roomsFuzzySearch = (query: string) => {
  const values: Room[] = Object.values(ROOMS);

  const fuse = new Fuse(values, {
    keys: [
      "name",
      "type",
      "short",
      "info.seating",
      "info.capacity",
      "info.type",
    ],
  });
  return fuse.search(query);
};
