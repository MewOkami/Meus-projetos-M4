import { AppDataSource } from "./data-source";
import { Movie } from "./entities";
import { movieRepo } from "./interfaces";

const moviesRepos: movieRepo = AppDataSource.getRepository(Movie);

export { moviesRepos };
