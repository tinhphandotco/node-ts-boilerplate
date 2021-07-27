import express from "express";

import loginRouter from "./login.route";
import uploadRouter from "./upload.route";

import checkAuth from "../../modules/auth/auth.middleware";

const apiRouter = express.Router();

apiRouter.use("/login", loginRouter);

apiRouter.use("/uploads", checkAuth, uploadRouter);
export default apiRouter;
