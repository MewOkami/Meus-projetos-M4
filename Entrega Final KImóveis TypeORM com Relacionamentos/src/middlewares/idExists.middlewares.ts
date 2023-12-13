import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepositories } from "../repositories";
import { AppError } from "../errors";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const foundEntity: User | null = await usersRepositories.findOneBy({ id });
  if (!foundEntity) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundEntity };

  return next();
};
