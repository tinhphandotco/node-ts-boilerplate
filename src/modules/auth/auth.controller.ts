import { Response, Request } from "express";
import { generateToken } from "../../util/jwt";
import { User } from "../users/users.model";

const postLogin = (req: Request, res: Response) : void => {
    const wrongLogin = () => {
        res.status(400).json({
            msg: "email or password does not exist"
        });
    };

    const reqUser = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({
        email: req.body.email,
    }).then(async (data) => {
        if (data !== null) {
            const result = reqUser.comparePassword(data.password);
            if (result === true) {
                const tokenToClient = await generateToken({
                    _id: data._id,
                    email: data.email,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    role: data.role
                });
                res.json({
                    msg: "login successful",
                    token: tokenToClient
                });
            }
            else wrongLogin();

        }
        else wrongLogin();

    }).catch((err) => {
        console.log(err);
        wrongLogin();
    });
};

export default {
    postLogin
};
