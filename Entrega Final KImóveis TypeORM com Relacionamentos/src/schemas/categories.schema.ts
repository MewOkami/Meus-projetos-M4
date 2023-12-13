import { z } from "zod";

const categoriesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categoriesSchemaCreate = categoriesSchema.omit({ id: true });

const categoriesReadSchema = categoriesSchema.array();

export { categoriesSchema, categoriesSchemaCreate, categoriesReadSchema };
