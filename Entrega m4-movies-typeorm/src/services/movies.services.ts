import { Movie } from "../entities";
import {
  Pagination,
  PaginationParams,
  movieCreate,
  movieRead,
  movieRepo,
  movieUpdate,
} from "../interfaces";
import { moviesRepos } from "../resositories";
import { AppError } from "../errors";

const create = async (payload: movieCreate): Promise<Movie> => {
  const movie: Movie = await moviesRepos.save(payload);

  return movie;
};

const read = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: PaginationParams): Promise<Pagination> => {
  const [movies, count]: Array<movieRead | number> =
    await moviesRepos.findAndCount({
      order: { [sort]: order },
      skip: page,
      take: perPage,
    });
  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const partialUpdate = async (
  movie: Movie,
  payload: movieUpdate
): Promise<Movie> => {
  return await moviesRepos.save({ ...movie, ...payload });
};

const destroy = async (movie: Movie): Promise<void> => {
  await moviesRepos.remove(movie);
};

export default { create, read, partialUpdate, destroy };
