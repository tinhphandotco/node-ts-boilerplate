import { Request, Response, NextFunction } from "express";

type ExRequest = Request & {
    user?: any
};

type ExResponse = Response;

type ExNextFunction = NextFunction;

declare module "express-request";
