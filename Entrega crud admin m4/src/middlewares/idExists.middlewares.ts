import { NextFunction, Request, Response } from "express";
import { User, UserResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: string = req.params.id;

  const queryResult: UserResult = await client.query(
    'SELECT * FROM "users" WHERE "id" = $1;',
    [id]
  );

  if (!queryResult.rowCount) {
    throw new AppError("Users not found.", 404);
  }

  return next();
};
