import { usersSchema } from "./users.schema";

const sessionCreate = usersSchema.pick({
  email: true,
  password: true,
});

export { sessionCreate };
