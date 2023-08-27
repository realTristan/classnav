import { ROOMS } from "@/app/lib/constants";
import { NextRouter, useRouter } from "next/router";

export default function RoomsPage() {
  const router: NextRouter = useRouter();

  const roomName: string | undefined = getRouterQuery(router);
  if (!roomName) return <></>;

  const roomInfo = ROOMS[roomName as string];
  if (!roomInfo) return <></>;

  return <></>;
}

const getRouterQuery = (router: NextRouter) =>
  router.query.name as string | undefined;
