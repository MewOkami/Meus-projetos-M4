import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepositories } from "../repositories";
import { AppError } from "../errors";

export const categoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundEntityCategory: Category | null =
    await categoriesRepositories.findOneBy({
      id: req.body.categoryId,
    });
  if (!foundEntityCategory) throw new AppError("Category already exists", 409);

  res.locals = { ...res.locals, foundEntityCategory };

  return next();
};
