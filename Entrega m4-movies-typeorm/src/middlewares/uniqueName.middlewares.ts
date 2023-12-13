import { NextFunction, Request, Response } from "express";
import { Movie } from "../entities";
import { moviesRepos } from "../resositories";
import { AppError } from "../errors";

export const uniqueNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundMovieName: Movie | null = await moviesRepos.findOneBy({
    name: req.body.name,
  });

  if (foundMovieName) {
    throw new AppError("Movie already exists.", 409);
  }

  return next();
};
