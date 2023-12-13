import { Router } from "express";
import { realEstateController } from "../controller";
import middlewares from "../middlewares";
import { realEstateSchemaCreate } from "../schemas";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.validateBody(realEstateSchemaCreate),
  middlewares.categoryId,
  realEstateController.create
);

realEstateRouter.get("", realEstateController.read);

export default realEstateRouter;
