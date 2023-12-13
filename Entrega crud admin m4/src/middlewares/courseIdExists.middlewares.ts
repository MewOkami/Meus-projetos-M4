import { NextFunction, Request, Response } from "express";
import { CoursesResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

export const courseidExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { courseId, userId } = req.params;

  const queryResult = await client.query(
    'SELECT * FROM "userCourses" WHERE "courseId" = $1 AND "userId" = $2;',
    [courseId, userId]
  );

  if (!queryResult.rowCount) {
    throw new AppError("User/course not found", 404);
  }

  return next();
};
