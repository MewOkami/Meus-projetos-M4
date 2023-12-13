import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepositories } from "../repositories";
import { AppError } from "../errors";

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  if (!email) return next();

  const foundEntity: User | null = await usersRepositories.findOneBy({ email });
  if (foundEntity) throw new AppError("Email already exists", 409);

  return next();
};
