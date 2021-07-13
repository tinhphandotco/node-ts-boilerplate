import { Response, Request } from "express";
import path from "path";
import { filename } from "../../util/upload";

const postUploadImage = (req: Request, res: Response) => {
    const file = req.file;
    if (!file) {
        res.status(400).json({
            msg: "No files"
        });
    }
    res.json({
        msg: "successful!",
        fileName: `order_${filename}${path.extname(file.originalname)}`
    });
};

const getUploadImage = (req: Request, res: Response) => {
    const filePath = path.join(__dirname, "../../src/uploads", req.params.filename);
    if (filePath) {
        res.sendFile(filePath);
    }
    else {
        res.status(400).json({
            msg: "No file!"
        });
    }
};

const apiUpload = {
    postUploadImage,
    getUploadImage
};

export default apiUpload;