import multer from "multer";
import { Request } from "express";
import { v4 as uuidv4 } from "uuid";
import path from "path";

export let filename = "";
const storage = multer.diskStorage({
    destination: function (req: Request, file: any, cb: any) {
        cb(null, "src/uploads");
    },
    filename: function (req: Request, file: any, cb: any) {
        filename = uuidv4();
        cb(null, `order_${filename}${path.extname(file.originalname)}`); //Appending extension
    }
});
export const upload = multer({ storage: storage });
