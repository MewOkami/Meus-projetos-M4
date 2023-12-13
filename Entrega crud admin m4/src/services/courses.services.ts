import format from "pg-format";
import {
  Courses,
  CoursesCreate,
  CoursesRead,
  CoursesResult,
  UserCourses,
  UserCoursesCreate,
  UserCoursesResult,
} from "../interfaces";
import { client } from "../database";

const create = async (payload: CoursesCreate): Promise<Courses> => {
  const queryFormat: string = format(
    `INSERT INTO "courses" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: CoursesResult = await client.query(queryFormat);

  return queryResult.rows[0];
};

const read = async (): Promise<CoursesRead> => {
  const queryResult: CoursesResult = await client.query(
    'SELECT * FROM "courses";'
  );
  return queryResult.rows;
};

const retriever = async (courseId: string): Promise<Courses> => {
  const queryString: string = `
        SELECT 
            "u"."id" AS "userId",
            "u"."name" AS "userName",
            "c"."id" AS "courseId",
            "c"."name" AS "courseName",
            "c"."description" AS "courseDescription",
            "uc"."active" AS "userActiveInCourse"
        FROM "courses" AS "c"
        JOIN "userCourses" AS "uc"
            ON "uc"."courseId" = "c"."id"
        JOIN "users" AS "u"
            ON "uc"."userId" = "u"."id"
        WHERE "c"."id" = $1;
    `;

  const query: CoursesResult = await client.query(queryString, [courseId]);

  return query.rows[0];
};

const createRegister = async (
  userId: string,
  courseId: string
): Promise<void> => {
  const queryString: string = `
    INSERT INTO "userCourses"
      ("userId", "courseId")
    VALUES ($1, $2)
    RETURNING *;
  `;

  await client.query(queryString, [userId, courseId]);
};

const destroy = async (courseId: string, userId: string): Promise<void> => {
  const queryString: string = `
    UPDATE "userCourses" 
    SET "active" = FALSE 
    WHERE "courseId" = $1 
    AND "userId" = $2;
  `;

  await client.query(queryString, [courseId, userId]);
};

export default { create, read, retriever, createRegister, destroy };
