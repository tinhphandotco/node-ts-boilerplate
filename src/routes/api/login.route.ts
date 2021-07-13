import express from "express";

import authCtrl from "../../modules/auth/auth.controller";
import usersCtrl from "../../modules/users/users.controller";

const loginRouter = express.Router();

loginRouter.post("/", authCtrl.postLogin);

loginRouter.get("/me", usersCtrl.getMe);

export default loginRouter;
