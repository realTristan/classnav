import { BUILDINGS } from "@/app/lib/constants/buildings";
import { ROOMS } from "@/app/lib/constants/rooms";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { Building, Room } from "@/app/lib/types";
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
        <h2 className="text-center text-8xl font-black text-white">
          {building.name}&nbsp;
        </h2>
        <span className="relative mt-9 h-1 w-1/2 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md sm:w-72 lg:w-[28rem]"></span>
        <Image
          src={building.image}
          alt="..."
          width={1920}
          height={1080}
          className="m-12 w-96 cursor-pointer rounded-lg hover:brightness-50"
        />
        <div className="mx-6 grid grid-cols-2 items-center justify-center gap-6 lg:flex lg:flex-wrap lg:gap-12">
          {building.rooms.map((roomName: string) => {
            const room: Room = ROOMS[roomName];
            return (
              <GradientCard
                key={Math.random()}
                name={room.name}
                href={room.href}
                type={room.type}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

const getBuildingName = (router: NextRouter): string | undefined =>
  router.query.name as string | undefined;
