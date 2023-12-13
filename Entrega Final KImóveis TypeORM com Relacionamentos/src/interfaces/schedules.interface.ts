import { z } from "zod";
import { scheduleSchemaCreate } from "../schemas";
import { scheduleSchemaRead } from "../schemas/schedules.schema";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type scheduleCreate = z.infer<typeof scheduleSchemaCreate>;
type scheduleRead = z.infer<typeof scheduleSchemaRead>;

type scheduleRepo = Repository<Schedule>;

export { scheduleCreate, scheduleRead, scheduleRepo };
