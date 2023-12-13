import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const admin: boolean = res.locals.decoded.admin;
  if (!admin) throw new AppError("Insufficient permission", 403);

  return next();
};
