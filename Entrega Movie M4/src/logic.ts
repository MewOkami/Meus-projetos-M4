import { Request, Response, json } from "express";
import { QueryResult } from "pg";
import { client } from "./database";
import format from "pg-format";

const create = async (req: Request, res: Response): Promise<Response> => {
  const queryFormat: string = format(
    'INSERT INTO "movies" (%I) VALUES (%L) RETURNING *;',
    Object.keys(req.body),
    Object.values(req.body)
  );

  const queryResult: QueryResult = await client.query(queryFormat);

  return res.status(201).json(queryResult.rows[0]);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { category } = req.query;

  if (category) {
    const queryteste: QueryResult = await client.query(
      'SELECT * FROM "movies" WHERE "category" = $1;',
      [req.query.category]
    );

    if (queryteste.rows.length) {
      return res.status(200).json(queryteste.rows);
    }
  }

  const queryResult: QueryResult = await client.query(
    'SELECT * FROM "movies";'
  );

  return res.status(200).json(queryResult.rows);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(res.locals.foundMovies);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const queryFormat: string = format(
    'UPDATE "movies" SET (%I) = ROW(%L) WHERE "id" = %L RETURNING *;',
    Object.keys(req.body),
    Object.values(req.body),
    req.params.id
  );

  const queryResult: QueryResult = await client.query(queryFormat);

  return res.status(200).json(queryResult.rows[0]);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const queryResult: QueryResult = await client.query(
    'DELETE FROM "movies" WHERE "id" = $1;',
    [req.params.id]
  );

  return res.status(204).json(queryResult);
};

export default { read, create, retrieve, partialUpdate, destroy };
