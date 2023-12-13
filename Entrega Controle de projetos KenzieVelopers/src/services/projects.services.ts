import format from "pg-format";
import { client } from "../database";
import {
  Projects,
  ProjectsCreate,
  ProjectsResult,
  ProjectsUpadate,
} from "../interfaces";

const create = async (payload: ProjectsCreate): Promise<Projects> => {
  const queryFormat: string = format(
    `INSERT INTO "projects" (%I) VALUES (%L) RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: ProjectsResult = await client.query(queryFormat);

  return queryResult.rows[0];
};

const partialUpdate = async (
  payload: ProjectsUpadate,
  id: string
): Promise<Projects> => {
  const queryFormat: string = format(
    `UPDATE "projects" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;`,
    Object.keys(payload),
    Object.values(payload)
  );

  const queryResult: ProjectsResult = await client.query(queryFormat, [id]);

  return queryResult.rows[0];
};

const retriever = async (projectsId: string): Promise<Projects> => {
  const queryString: string = `
    SELECT 
      "p"."id" AS "projectId",
      "p"."name" AS "projectName",
      "p"."description" AS "projectDescription",
      "p"."repository" AS "projectRepository",
      "p"."startDate" AS "projectStartDate",
      "p"."endDate" AS "projectEndDate",
      "p"."developerId" AS "projectDeveloperName"
    FROM "projects" AS "p"
    WHERE "p"."id" = $1;
  `;

  const query: ProjectsResult = await client.query(queryString, [
    Number(projectsId),
  ]);

  return query.rows[0];
};

export default { create, retriever, partialUpdate };
