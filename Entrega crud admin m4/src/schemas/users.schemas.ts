import { z } from "zod";

const usersSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  email: z.string().max(50).email(),
  password: z.string().max(120),
  admin: z.boolean().default(false),
});

const usersCreateSchema = usersSchema.omit({ id: true });
const usersCreateOmitPasswordSchema = usersSchema.omit({ password: true });

export { usersSchema, usersCreateSchema, usersCreateOmitPasswordSchema };
