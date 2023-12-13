import { z } from "zod";
import {
  usersCreateOmitPasswordSchema,
  usersCreateSchema,
  usersSchema,
} from "../schemas";
import { QueryResult } from "pg";

type User = z.infer<typeof usersSchema>;

type UserCreate = z.infer<typeof usersCreateSchema>;
type UserRead = Array<User>;
type UserCreateOmtPassword = z.infer<typeof usersCreateOmitPasswordSchema>;

type UserResult = QueryResult<User>;

export { User, UserCreate, UserRead, UserResult, UserCreateOmtPassword };
