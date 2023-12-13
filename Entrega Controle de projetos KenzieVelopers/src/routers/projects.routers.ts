import { Router } from "express";
import { projectsControllers } from "../controllers";
import middlewares from "../middlewares";

const projectsRouter: Router = Router();

projectsRouter.post("", middlewares.idExists, projectsControllers.create);

projectsRouter.use("/:id", middlewares.ProjectsIdExists);

projectsRouter.get("/:id", projectsControllers.retriever);
projectsRouter.patch(
  "/:id",
  middlewares.idExists,
  projectsControllers.partialUpdate
);

export default projectsRouter;
