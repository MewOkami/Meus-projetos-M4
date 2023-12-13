import { Router } from "express";
import middlewares from "../middlewares";
import userControllers from "../controllers/user.controllers";
import { usersCreateSchema } from "../schemas";

const usersRouter: Router = Router();

usersRouter.post(
  "",
  middlewares.validateBody(usersCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
);
usersRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  userControllers.read
);

usersRouter.use("/:id", middlewares.idExists);

usersRouter.get(
  "/:id/courses",
  middlewares.verifyToken,
  middlewares.verifyUserPermission,
  middlewares.idExists,
  userControllers.retriever
);

export default usersRouter;
