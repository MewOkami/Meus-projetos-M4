import { z } from "zod";
import {
  usersReadSchema,
  usersResultsSchema,
  usersSchemaCreate,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type UserCreate = z.infer<typeof usersSchemaCreate>;
type UserRead = z.infer<typeof usersReadSchema>;
type UserResult = z.infer<typeof usersResultsSchema>;
type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>;

export { UserCreate, UserRead, UserResult, UserUpdate, UserRepo };
