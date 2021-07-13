import { Response, Request } from "express";
import { verifyToken } from "../../util/jwt";


const getMe = (req: Request, res: Response) : void => {

    const tokenFromClient = req.headers.authorization;
    
    verifyToken(tokenFromClient).then((data: any) => {
        
        const dataToClient = {
            _id: data._id,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            role: data.role,
        };

        res.json(
            dataToClient
        );

    }).catch(() => {
        res.status(400).json({
            msg: "wrong token!"
        });
    });
};


export default {
    getMe
};
