import { NextFunction, Request, Response } from "express";
import { DeveloperInfosResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const DeveloperInfosExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: DeveloperInfosResult = await client.query(
    'SELECT * FROM "developerInfos" WHERE "developerId" = $1;',
    [req.params.id]
  );

  if (query.rowCount) {
    throw new AppError("Developer infos already exists.", 409);
  }

  return next();
};
