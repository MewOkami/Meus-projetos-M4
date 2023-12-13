import { QueryResult } from "pg";

type Projects = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date | null;
  developerId: number | null;
};

type ProjectsCreate = Omit<Projects, "id">;
type ProjectsUpadate = Partial<ProjectsCreate>;
type ProjectsResult = QueryResult<Projects>;

export { Projects, ProjectsCreate, ProjectsUpadate, ProjectsResult };
