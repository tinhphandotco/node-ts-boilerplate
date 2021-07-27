import { ExResponse } from "express-request";

/**
 * Success: response(res)(null, { token: "xxx" })
 * Error: response(res)(new Error('Unauthorization'), null, 401)
 */

export const response = (res: ExResponse) => (err: any, data?: any, code?: number) : void => {
    const status = code ? code : (err ? 400 : 200);
    
    res.status(status).json({
        ...err ? {
            errors: err instanceof Error ? { message: err.message } : err
        } : {
            data,
        }
    });
};
