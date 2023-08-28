import { BUILDINGS } from "@/app/lib/constants/buildings";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { Building } from "@/app/lib/types";
import "@/app/globals.css";
import GradientCard from "@/app/components/GradientCard";
import GithubRef from "@/app/components/GithubRef";
import ClassfindRef from "@/app/components/ClassfindRef";
import ScrollIndicator from "@/app/components/ScrollIndicator";
import HomeIcon from "@/app/components/HomeIcon";
import Head from "next/head";

export default function BuildingsPage() {
  const router: NextRouter = useRouter();

  const buildingName: string | undefined = getBuildingName(router);
  if (!buildingName) return <></>;

  const building: Building = BUILDINGS[buildingName as string];
  if (!building) return <></>;

  return (
    <>
      <Head>
        <title>Buildings | ClassNav</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center p-20">
        <GithubRef />
        <ClassfindRef />
        <ScrollIndicator />
        <HomeIcon />
        <h2 className="text-center text-6xl font-black text-white md:text-8xl">
          {building.name}&nbsp;
        </h2>
        <span className="relative mt-9 h-1 w-1/2 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md sm:w-72 lg:w-[28rem]"></span>
        <Image
          src={building.image}
          alt="..."
          width={1920}
          height={1080}
          className="mx-12 mt-12 w-96 cursor-pointer rounded-lg hover:brightness-50"
        />
        <p className="mt-6 text-center font-semibold tracking-wide text-white">
          Address:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text tracking-wide text-transparent">
            {building.address}
          </mark>
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 lg:gap-12">
          {building.rooms.map((roomName: string) => (
            <GradientCard
              key={Math.random()}
              name={roomName}
              href={`/rooms/${roomName}`}
              type={"Room"}
            />
          ))}
        </div>
      </main>
    </>
  );
}

const getBuildingName = (router: NextRouter): string | undefined =>
  router.query.name as string | undefined;
