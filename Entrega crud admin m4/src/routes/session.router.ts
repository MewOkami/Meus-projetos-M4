import { Router } from "express";
import middlewares from "../middlewares";
import { sessionCreate } from "../schemas";
import sessionController from "../controllers/session.controller";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  middlewares.validateBody(sessionCreate),
  sessionController.create
);

export default sessionRouter;
