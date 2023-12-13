import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import { developersRounter, projectsRouter } from "./routers";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/developers", developersRounter);
app.use("/projects", projectsRouter);

app.use(middlewares.handleErrors);

export default app;
