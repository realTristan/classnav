import { rateLimited } from "@/app/lib/rate-limit";
import { CheerioAPI, load } from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ message: "No query provided" });
  }

  if (await rateLimited(req, res)) {
    return res.status(429).json({ message: "Too Many Requests" });
  }

  // Fetch the page
  await fetch("https://classfind.com/guelph/room/" + query, {
    method: "GET",
    headers: {
      "Content-Type": "text/html",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    },
  })
    .then((res: Response) => res.text())
    .then(async (html: string) => {
      const $ = load(html);
      const steps = await exractSteps($);
      res.status(200).json({ message: "ok", result: steps });
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
}

const exractSteps = async ($: CheerioAPI) => {
  // Get all the texts from the divs with the ids description
  const descriptions = $("#description").map((i, description) =>
    $(description).text(),
  );

  // Get the src attribute of each image
  const images = $("img")
    .map((_, image) => $(image).attr("src"))
    .get()
    .filter((src) => src !== undefined);

  // Return an array with maps of the descriptions and images
  let result = [];
  for (let i = 0; i < descriptions.length; i++) {
    result.push({
      description: descriptions[i],
      image: "https://classfind.com/" + images[i],
    });
  }

  return result;
};
