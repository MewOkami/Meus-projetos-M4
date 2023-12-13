import { Router } from "express";
import { moviesControllers } from "../controllers";
import {
  pagination,
  uniqueNameExists,
  validateBody,
  verifyIdExists,
} from "../middlewares";
import { movieCreateSchema, movieUptadeSchema } from "../schemas";

export const movieRouter: Router = Router();

movieRouter.post(
  "",
  uniqueNameExists,
  validateBody(movieCreateSchema),
  moviesControllers.create
);
movieRouter.get("", pagination, moviesControllers.read);

movieRouter.use("/:id", verifyIdExists);

movieRouter.delete("/:id", moviesControllers.destroy);
movieRouter.patch(
  "/:id",
  uniqueNameExists,
  validateBody(movieUptadeSchema),
  moviesControllers.partialUpdate
);
