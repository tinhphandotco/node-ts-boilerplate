import express from "express";
import path from "path";
import fs from "fs";

const apiRouter = express.Router();

apiRouter.get("*", (req, res) => {
  fs.readFile(path.join(__dirname, "../../../web/build/index.html"), function(err, data) {
    if (err) {
      res.status(200).json({
        error: err.message
      });
      return;
    }

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data);
    return res.end();
  });
});

export default apiRouter;
