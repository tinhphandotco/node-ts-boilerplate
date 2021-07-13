import { Request, Response, NextFunction } from "express";

import { verifyToken } from "../../util/jwt";
export default async (req: Request & { user: any }, res: Response, next: NextFunction) : Promise<void> => {
  const token = String(req.headers["authorization"] || "");

  try {
    const user = await verifyToken(token);

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({
      msg: "401"
    });
  }
};
