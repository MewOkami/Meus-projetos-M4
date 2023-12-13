import { usersSchema } from ".";

const sessionCreate = usersSchema.pick({
  email: true,
  password: true,
});

export { sessionCreate };
