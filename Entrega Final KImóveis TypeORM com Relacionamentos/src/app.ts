import "reflect-metadata";
import "express-async-errors";
import express from "express";
import sessionRouter from "./routers/session.router";
import userRouter from "./routers/user.router";
import middlewares from "./middlewares";
import categoryRouter from "./routers/category.router";
import realEstateRouter from "./routers/realEstate.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/realEstate", realEstateRouter);

app.use("/login", sessionRouter);

app.use(middlewares.handleError);

export default app;
