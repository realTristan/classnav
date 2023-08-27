import ClassfindRef from "@/app/components/ClassfindRef";
import GithubRef from "@/app/components/GithubRef";
import HomeIcon from "@/app/components/HomeIcon";
import ScrollIndicator from "@/app/components/ScrollIndicator";
import { ROOMS } from "@/app/lib/constants/rooms";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { Step } from "@/app/lib/types";
import "@/app/globals.css";

export default function RoomsPage() {
  const router: NextRouter = useRouter();

  const roomName: string | undefined = getRouterQuery(router);
  if (!roomName) return <></>;

  const room = ROOMS[roomName as string];
  if (!room) return <></>;

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
        <h2 className="mb-4 text-center text-8xl font-black tracking-wide text-white">
          {room.name}&nbsp;
        </h2>
        <p className="font-semibold tracking-wide text-white">
          Room Type:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text tracking-wide text-transparent">
            {room.info.type}
          </mark>
        </p>
        <p className="font-semibold tracking-wide text-white">
          Room Seating Style:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text tracking-wide text-transparent">
            {room.info.seating}
          </mark>
        </p>
        <p className="font-semibold tracking-wide text-white">
          Room Capacity:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text tracking-wide text-transparent">
            {room.info.capacity}
          </mark>
        </p>
        <span className="relative mt-9 h-1 w-1/2 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md sm:w-72 lg:w-[28rem]"></span>
        <div className="mx-6 flex flex-wrap items-center justify-center gap-6">
          {room.steps.map((step: Step, i: number) => {
            return (
              <div
                key={Math.random()}
                className="flex w-[28rem] flex-col items-center justify-center"
              >
                <Image
                  src={step.image}
                  alt="..."
                  width={1920}
                  height={1080}
                  className="m-12 h-80 w-96 cursor-pointer rounded-lg hover:brightness-50"
                />
                <p className="text-center font-semibold tracking-wider text-white">
                  <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text tracking-wide text-transparent">
                    Step {i + 1}
                  </mark>{" "}
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

const getRouterQuery = (router: NextRouter) =>
  router.query.name as string | undefined;
