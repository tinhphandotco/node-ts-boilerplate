import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import bluebird from "bluebird";
import path from "path";

import { MONGODB_URI } from "./config/secrets";

// Controllers (route handlers)
import apiRouter from "./routes/api";
import webRouter from "./routes/web.route";

// API keys and Passport configuration

// Create Express server

const app = express();

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true }).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());

app.use(express.static(path.join(__dirname, "../../web/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */

/**
 * API examples routes.
 */
app.use("/api", apiRouter);

app.use("/", webRouter);

export default app;
