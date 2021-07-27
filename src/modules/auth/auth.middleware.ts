import { ExRequest, ExResponse, ExNextFunction } from "express-request";

import { verifyToken } from "../../util/jwt";

export default async (req: ExRequest, res: ExResponse, next: ExNextFunction) : Promise<void> => {
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
