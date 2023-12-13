import { QueryResult } from "pg";

type Developers = {
  id: number;
  name: string;
  email: string;
};

type DevelopersResult = QueryResult<Developers>;
type DevelopersCreate = Omit<Developers, "id">;
type DevelopersRead = Array<Developers>;
type DevelopersUpdate = Partial<DevelopersCreate>;

export {
  Developers,
  DevelopersResult,
  DevelopersCreate,
  DevelopersRead,
  DevelopersUpdate,
};
