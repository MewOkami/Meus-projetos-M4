import { z } from "zod";

const coursesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(15),
  description: z.string(),
});

const coursesCreateSchema = coursesSchema.omit({ id: true });

export { coursesSchema, coursesCreateSchema };
