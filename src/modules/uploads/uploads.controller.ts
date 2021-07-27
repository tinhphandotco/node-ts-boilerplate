import { ExRequest, ExResponse } from "express-request";
import path from "path";
import { filename } from "../../util/upload";

const postUploadImage = (req: ExRequest, res: ExResponse) : void => {
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

const getUploadImage = (req: ExRequest, res: ExResponse) : void => {
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