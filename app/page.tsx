"use client";

import { useEffect, useState } from "react";
import GithubRef from "./components/GithubRef";
import GradientCard from "./components/GradientCard";
import GradientTitle from "./components/GradientHeader";
import GradientSearchBar from "./components/GradientSearchBar";
import ClassfindRef from "./components/ClassfindRef";
import { Building } from "./lib/types";

export default function Home() {
  const [results, setResults] = useState<Building[] | null>(null);
  useEffect(() => {
    if (results) return;

    fetch("/api/find").then(async (res) => {
      if (!res.ok) return;
      const json = await res.json();
      if (!json.result) return;

      setResults(Object.values(json.result));
    });
  });
  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <GradientTitle />
      <GradientSearchBar />
      <GithubRef />
      <ClassfindRef />
      <div className="mx-6 mt-12 grid grid-cols-2 items-center justify-center gap-6 lg:m-12 lg:flex lg:flex-wrap lg:gap-12">
        {results &&
          results.map((value: Building) => (
            <GradientCard
              key={Math.random()}
              name={value.name}
              short={value.short}
              type={value.type}
            />
          ))}
      </div>
    </main>
  );
}
