import { Router } from "express";
import {
  developersControllers,
  developersInfosControllers,
} from "../controllers";
import middlewares from "../middlewares";

const developersRounter: Router = Router();

developersRounter.post(
  "",
  middlewares.uniqueEmail,
  developersControllers.create
);

developersRounter.use("/:id", middlewares.idExists);
// developersRounter.use("/:id", middlewares.developersIdExists);

developersRounter.get("/:id", developersControllers.retriever);
developersRounter.patch(
  "/:id",
  middlewares.uniqueEmail,
  developersControllers.partialUpdate
);
developersRounter.delete("/:id", developersControllers.destroy);

developersRounter.post(
  "/:id/infos",
  middlewares.DeveloperInfosExists,
  developersInfosControllers.create
);

export default developersRounter;
