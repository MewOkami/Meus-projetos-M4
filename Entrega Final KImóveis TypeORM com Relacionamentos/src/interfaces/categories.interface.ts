import { z } from "zod";
import { categoriesReadSchema, categoriesSchemaCreate } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoriesSchemaCreate>;
type CategoryRead = z.infer<typeof categoriesReadSchema>;

type CategoryRepo = Repository<Category>;

export { CategoryCreate, CategoryRead, CategoryRepo };
