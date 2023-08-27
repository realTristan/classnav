import { NextApiRequest, NextApiResponse } from "next";
import { BUILDINGS } from "@/app/lib/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const query: string = req.query.q as string;

  // if (!query) return res.status(200).json({ message: "ok", result: BUILDINGS });
  return res.status(200).json({ message: "ok", result: BUILDINGS });
}
