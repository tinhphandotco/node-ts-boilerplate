import express from "express";
import { upload } from "../../util/upload";
import apiUpload from "../../modules/uploads/uploads.controller";

const uploadRoter = express.Router();

uploadRoter.post("/", upload.single("file"), apiUpload.postUploadImage);

uploadRoter.get("/:filename", apiUpload.getUploadImage);

export default uploadRoter;