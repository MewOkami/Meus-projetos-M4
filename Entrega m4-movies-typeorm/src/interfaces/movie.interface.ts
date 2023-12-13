import { z } from "zod";
import { movieCreateSchema } from "../schemas";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type movieCreate = z.infer<typeof movieCreateSchema>;
type movieRead = Array<Movie>;
type movieUpdate = DeepPartial<Movie>;

type movieRepo = Repository<Movie>;

export { movieCreate, movieRead, movieUpdate, movieRepo };
