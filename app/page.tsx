"use client";

import { useState } from "react";
import GithubRef from "./components/GithubRef";
import GradientCard from "./components/GradientCard";
import GradientHeader from "./components/GradientHeader";
import GradientSearchBar from "./components/GradientSearchBar";
import ClassfindRef from "./components/ClassfindRef";
import { Building } from "./lib/types";
import { BUILDINGS } from "./lib/constants/buildings";
import ScrollIndicator from "./components/ScrollIndicator";

export default function Home() {
  const [results, setResults] = useState<Building[]>(Object.values(BUILDINGS));

  return (
    <main className="flex min-h-screen flex-col items-center p-20">
      <GradientHeader />
      <GradientSearchBar results={results} setResults={setResults} />
      <GithubRef />
      <ClassfindRef />
      <ScrollIndicator />
      <div className="mx-6 mt-12 flex flex-wrap items-center justify-center gap-6 lg:m-12 lg:gap-12">
        {results &&
          results.map((value: Building) => (
            <GradientCard key={Math.random()} {...value} />
          ))}
      </div>
    </main>
  );
}
