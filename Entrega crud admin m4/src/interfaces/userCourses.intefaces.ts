import { z } from "zod";
import {
  userCoursesCreateschema,
  userCoursesPartalSchema,
  userCoursesSchema,
} from "../schemas";
import { QueryResult } from "pg";

type UserCourses = z.infer<typeof userCoursesSchema>;

type UserCoursesCreate = z.infer<typeof userCoursesCreateschema>;
type UserCoursesPartial = z.infer<typeof userCoursesPartalSchema>;

type UserCoursesResult = QueryResult<UserCourses>;

export {
  UserCourses,
  UserCoursesCreate,
  UserCoursesPartial,
  UserCoursesResult,
};
