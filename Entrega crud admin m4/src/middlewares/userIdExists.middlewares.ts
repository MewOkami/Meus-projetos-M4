import { NextFunction, Request, Response } from "express";
import { CoursesResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const useridExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userId } = req.params;

  const queryResult = await client.query(
    'SELECT * FROM "userCourses" WHERE "userId" = $1;',
    [userId]
  );

  if (!queryResult.rowCount) {
    throw new AppError("No course found", 404);
  }

  return next();
};
