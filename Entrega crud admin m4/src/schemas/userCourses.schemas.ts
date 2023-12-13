import { z } from "zod";

const userCoursesSchema = z.object({
  id: z.number().positive(),
  active: z.boolean().default(true),
  userId: z.number(),
  courseId: z.number(),
});

const userCoursesCreateschema = userCoursesSchema.omit({
  id: true,
  active: true,
});

const userCoursesPartalSchema = userCoursesSchema.omit({
  id: true,
  userId: true,
  courseId: true,
});

export { userCoursesSchema, userCoursesCreateschema, userCoursesPartalSchema };
