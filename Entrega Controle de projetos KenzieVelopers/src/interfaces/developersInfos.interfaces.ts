import { QueryResult } from "pg";

type OS = "Windows" | "Linux" | "MacOS";

type DeveloperInfos = {
  id: number;
  developerSince: Date;
  preferredOS: OS;
  developerId: number;
};

type DeveloperInfosResult = QueryResult<DeveloperInfos>;
type DeveloperInfosCreate = Omit<DeveloperInfos, "id">;

export { DeveloperInfos, DeveloperInfosResult, DeveloperInfosCreate };
