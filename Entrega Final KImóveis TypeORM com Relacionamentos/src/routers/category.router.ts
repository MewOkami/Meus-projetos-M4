import { Router } from "express";
import { categoriesController } from "../controller";
import middlewares from "../middlewares";
import { categoriesSchemaCreate } from "../schemas";

const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.validateBody(categoriesSchemaCreate),
  middlewares.uniqueCategory,
  middlewares.verifyToken,
  middlewares.isAdmin,
  categoriesController.create
);
categoryRouter.get("", categoriesController.read);

export default categoryRouter;
