import { z } from "zod";
import { coursesCreateSchema, coursesSchema } from "../schemas";
import { QueryResult } from "pg";

type Courses = z.infer<typeof coursesSchema>;

type CoursesCreate = z.infer<typeof coursesCreateSchema>;
type CoursesRead = Array<Courses>;

type CoursesResult = QueryResult<Courses>;

export { Courses, CoursesCreate, CoursesRead, CoursesResult };
