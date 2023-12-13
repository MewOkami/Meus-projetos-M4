import format from "pg-format";
import {
  Developers,
  DevelopersCreate,
  DevelopersResult,
  DevelopersUpdate,
} from "../interfaces";
import { client } from "../database";
import { Request, Response } from "express";

const create = async (payload: DevelopersCreate): Promise<Developers> => {
  const queryFormat: string = format(
    `INSERT INTO "developers" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: DevelopersResult = await client.query(queryFormat);

  return queryResult.rows[0];
};

const partialUpdate = async (
  payload: DevelopersUpdate,
  id: string
): Promise<Developers> => {
  const queryFormat: string = format(
    `UPDATE "developers" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: DevelopersResult = await client.query(queryFormat, [id]);

  return queryResult.rows[0];
};

const retriever = async (DevelopersId: string): Promise<Developers> => {
  const queryString: string = `
    SELECT 
      "d"."id" AS "developerId",
      "d"."name" AS "developerName",
      "d"."email" AS "developerEmail",
      "di"."developerSince" AS "developerInfoDeveloperSince",
      "di"."preferredOS" AS "developerInfoPreferredOS"
    FROM "developers" AS "d"
    LEFT JOIN "developerInfos" AS "di"
      ON "di"."developerId" = "d"."id"
    WHERE "d"."id" = $1;
  `;

  const query: DevelopersResult = await client.query(queryString, [
    DevelopersId,
  ]);

  return query.rows[0];
};

const destroy = async (DevelopersId: string): Promise<void> => {
  await client.query('DELETE FROM "developers" WHERE "id" = $1;', [
    DevelopersId,
  ]);
};

export default { create, retriever, partialUpdate, destroy };
