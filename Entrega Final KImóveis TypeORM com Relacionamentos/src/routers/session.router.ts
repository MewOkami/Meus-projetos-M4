import { Router } from "express";
import { sessionController } from "../controller";
import middlewares from "../middlewares";
import { sessionCreate } from "../schemas";

const sessionRouter: Router = Router();

sessionRouter.post(
  "",
  middlewares.validateBody(sessionCreate),
  sessionController.create
);

export default sessionRouter;
