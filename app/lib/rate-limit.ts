import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * Get the IP address
 */
const getIP = (req: any) =>
  req.ip ||
  (req.connection && req.connection.remoteAddress) ||
  (req.headers && req.headers["x-forwarded-for"]) ||
  (req.headers && req.headers["x-real-ip"]);

/**
 * Apply a middleware
 */
export const applyMiddleware =
  (mw: any) => (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      mw(req, res, (result: any) =>
        result instanceof Error ? reject(result) : resolve(result),
      );
    });

/**
 * Get the middlewares to limit the number of requests
 * @param limit The number of requests allowed
 * @param windowMs The time window in milliseconds
 * @param delayAfter The number of requests allowed before starting to delay responses
 * @param delayMs The milliseconds of delay after exceeding the number of requests
 * @returns The middlewares to limit the number of requests
 */
export const getMiddlewares = (
  options: {
    limit: number | undefined;
    windowMs?: number | undefined;
    delayAfter?: number | undefined;
    delayMs?: number | undefined;
  } = {
    limit: 10,
    windowMs: 60 * 1000,
    delayAfter: 10,
    delayMs: 100,
  },
) => [
  slowDown({
    keyGenerator: getIP,
    windowMs: options.windowMs,
    delayAfter: options.delayAfter,
    delayMs: options.delayMs,
  }),
  rateLimit({
    keyGenerator: getIP,
    windowMs: options.windowMs,
    max: options.limit,
  }),
];

/**
 * Middlewares to limit the number of requests
 */
export const middlewares = () => {
  const global: any = globalThis as any;
  return global.getMiddlewares();
};

/**
 * Middleware to limit the number of requests
 */
export const rateLimited = async (req: any, res: any) => {
  const global: any = globalThis as any;
  return await global.rateLimited(req, res);
};

const global: any = globalThis as any;
if (!global.rateLimited) {
  const middlewares = getMiddlewares({ limit: 10, delayMs: 0 }).map(
    applyMiddleware,
  );

  global.rateLimited = async (req: any, res: any) => {
    try {
      await Promise.all(middlewares.map((mw: any) => mw(req, res)));
    } catch (_: any) {
      return true;
    }
  };
}
