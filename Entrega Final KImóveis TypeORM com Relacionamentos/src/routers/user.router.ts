import { Router } from "express";
import { userController } from "../controller";
import middlewares from "../middlewares";
import { usersSchemaCreate } from "../schemas";

const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(usersSchemaCreate),
  middlewares.uniqueEmail,
  userController.create
);
userRouter.get(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.read
);

userRouter.patch(
  "/:id",
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.partialUpdate
);
userRouter.delete(
  "/:id",
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isAdmin,
  userController.destroy
);

export default userRouter;
