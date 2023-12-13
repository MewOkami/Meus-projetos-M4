import { z } from "zod";

const usersSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const usersSchemaCreate = usersSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const usersResultsSchema = usersSchema.omit({ password: true });

const usersReadSchema = usersResultsSchema.array();

const usersUpdateSchema = usersSchemaCreate.omit({ admin: true }).partial();

export {
  usersSchema,
  usersSchemaCreate,
  usersResultsSchema,
  usersReadSchema,
  usersUpdateSchema,
};
