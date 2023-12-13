import { Router } from "express";
import coursesControllers from "../controllers/courses.controllers";
import middlewares from "../middlewares";
import { coursesCreateSchema } from "../schemas";

const coursesRouter: Router = Router();

coursesRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.validateBody(coursesCreateSchema),
  coursesControllers.create
);
coursesRouter.get("", coursesControllers.read);

coursesRouter.get(
  "/:id/users",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.idExists,
  coursesControllers.retriever
);

coursesRouter.post(
  "/:courseId/users/:userId",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.courseidExists,
  coursesControllers.createRegister
);

coursesRouter.delete(
  "/:courseId/users/:userId",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.courseidExists,
  coursesControllers.destroy
);

export default coursesRouter;
