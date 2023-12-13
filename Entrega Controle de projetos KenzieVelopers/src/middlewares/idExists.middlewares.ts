import { NextFunction, Request, Response } from "express";
import { Developers, DevelopersResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const idExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.baseUrl === "/projects" && !req.body.developerId) {
    return next();
  }

  const id: string | number = req.body.developerId || req.params.id;

  const queryResult: DevelopersResult = await client.query(
    'SELECT * FROM "developers" WHERE "id" = $1;',
    [id]
  );

  if (!queryResult.rowCount) {
    throw new AppError("Developer not found.", 404);
  }

  const foundDevelopers: Developers = queryResult.rows[0];
  res.locals = { ...res.locals, foundDevelopers };

  return next();
};
