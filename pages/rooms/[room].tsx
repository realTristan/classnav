import ClassfindRef from "@/app/components/ClassfindRef";
import GithubRef from "@/app/components/GithubRef";
import HomeIcon from "@/app/components/HomeIcon";
import ScrollIndicator from "@/app/components/ScrollIndicator";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";
import { RoomInfo, Step } from "@/app/lib/types";
import "@/app/globals.css";
import { useEffect } from "react";
import { ObjectState } from "@/app/lib/state";
import { ROOM_INFOS } from "@/app/lib/constants/rooms";
import LoadingCenter from "@/app/components/Loading";
import { Poppins } from "next/font/google";
import LocationModal from "@/app/components/LocationModal";

const poppins = Poppins({
  style: ["normal"],
  weight: ["400", "700", "800"],
  subsets: ["latin-ext"],
});

export default function RoomsPage() {
  // Get the room name
  const router: NextRouter = useRouter();
  const roomName: string = (router.query.room || "") as string;

  // Track the active step for the location modal
  const activeStep = new ObjectState<Step | null>(null);

  // Get the room navigation steps
  const steps = new ObjectState<Step[]>([]);
  useEffect(() => {
    if (!roomName) return;
    if (steps.updated) return;

    fetch(`/api/rooms/?q=${roomName}`).then(async (res) => {
      if (res.ok) {
        let json = await res.json();
        steps.set(json.result);
      }
    });
  });

  if (!steps.updated) return <LoadingCenter />;

  const roomInfo: RoomInfo | undefined = ROOM_INFOS[roomName];

  return (
    <>
      <Head>
        <title>Rooms | ClassNav</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center p-20 ${poppins.className}`}
      >
        <GithubRef />
        <ClassfindRef />
        <ScrollIndicator />
        <HomeIcon />
        <h2 className="mb-4 text-center text-6xl font-black tracking-wide text-white md:text-8xl">
          {roomName}&nbsp;
        </h2>
        <p className="text-center text-xs font-semibold tracking-wide text-white xs:text-sm sm:text-base">
          Room Type:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-normal tracking-wide text-transparent">
            {(roomInfo && roomInfo.type) || "Unknown"}
          </mark>
        </p>
        <p className="text-center text-xs font-semibold tracking-wide text-white xs:text-sm sm:text-base">
          Room Seating Style:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-normal tracking-wide text-transparent">
            {(roomInfo && roomInfo.seating) || "Unknown"}
          </mark>
        </p>
        <p className="text-center text-xs font-semibold tracking-wide text-white xs:text-sm sm:text-base">
          Room Capacity:{" "}
          <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-normal tracking-wide text-transparent">
            {(roomInfo && roomInfo.capacity) || "Unknown"}
          </mark>
        </p>
        <span className="relative mb-10 mt-6 h-1 w-1/2 rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 duration-300 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-xl before:bg-gradient-to-br before:from-blue-600 before:to-indigo-500 before:blur-sm before:duration-300 before:ease-in-out hover:bg-gradient-to-tr hover:before:bg-gradient-to-tr hover:before:blur-md sm:w-72 lg:w-[28rem]"></span>
        <div className="mx-6 flex flex-wrap items-center justify-center gap-6">
          {steps.value.map((step: Step, i: number) => (
            <div
              key={Math.random()}
              className="flex h-80 w-72 flex-col gap-4 rounded-lg bg-slate-900 p-4 xs:h-[21rem] xs:w-[21rem] xs:p-8 sm:h-[30rem] sm:w-[28rem] sm:gap-6"
            >
              <div onClick={() => activeStep.set(step)}>
                <Image
                  src={step.image}
                  alt="..."
                  width={1920}
                  height={1080}
                  className="h-52 w-72 cursor-pointer rounded-lg hover:brightness-50 sm:h-80 sm:w-96"
                />
              </div>
              <p className="text-center text-xs font-normal tracking-wider text-white xs:text-sm sm:text-base">
                <mark className="mr-2 bg-transparent bg-gradient-to-br from-blue-600 to-violet-700 bg-clip-text font-semibold tracking-wide text-transparent">
                  Step {i + 1}
                </mark>{" "}
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      {activeStep.value && <LocationModal activeStep={activeStep} />}
    </>
  );
}
