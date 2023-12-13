import "express-async-errors";
import "dotenv/config";
import express, { Application, json } from "express";
import { coursesRouter, sessionRouter, usersRouter } from "./routes";
import middlewares from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/login", sessionRouter);

app.use(middlewares.handleErrors);

export default app;
