import jwt from "jsonwebtoken";
import { TOKEN_LIFE, TOKEN_SECRET } from "../config/secrets";

const generateToken = (dataInToken: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign(dataInToken, TOKEN_SECRET, {
        expiresIn: TOKEN_LIFE,
      });
      resolve(token);
    } catch (err: any) {
      reject(err);
    }
  });
};

const verifyToken = (tokenFromClient: string) : Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const data = jwt.verify(tokenFromClient, TOKEN_SECRET);
      if (data) {
        resolve(data);
      }
    } catch (err: any) {
      console.log("err token", err);
      reject(err);
    }
  });
};

export { generateToken, verifyToken };
