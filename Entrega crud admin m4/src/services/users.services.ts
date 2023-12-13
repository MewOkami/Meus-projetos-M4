import format from "pg-format";
import {
  User,
  UserCreate,
  UserCreateOmtPassword,
  UserRead,
  UserResult,
} from "../interfaces";
import { client } from "../database";
import { Request, Response } from "express";
import { hash } from "bcryptjs";
import { usersCreateOmitPasswordSchema } from "../schemas";
import { AppError } from "../errors";

const create = async (payload: UserCreate): Promise<UserCreateOmtPassword> => {
  payload.password = await hash(payload.password, 10);
  const queryFormat: string = format(
    'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: UserResult = await client.query(queryFormat);

  return usersCreateOmitPasswordSchema.parse(queryResult.rows[0]);
};

const read = async (): Promise<UserRead> => {
  const query: UserResult = await client.query('SELECT * FROM "users";');
  return query.rows;
};

const retriever = async (userId: string): Promise<User> => {
  const queryString: string = `
    SELECT 
      "c"."id" AS "courseId",
      "c"."name" AS "courseName",
      "c"."description" AS "courseDescription",
      "uc"."active" AS "userActiveInCourse",
      "u"."id" AS "userId",
      "u"."name" AS "userName"
    FROM "courses" AS "c"
    JOIN "userCourses" AS "uc"
      ON "uc"."courseId" = "c"."id"
    JOIN "users" AS "u"
      ON "uc"."userId" = "u"."id"
    WHERE "u"."id" = $1;
  `;

  const query: UserResult = await client.query(queryString, [userId]);

  if (query.rowCount > 0) {
    return query.rows[0];
  }

  throw new AppError("No course found", 404);
};

export default { create, read, retriever };
