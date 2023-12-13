import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  userId: z.number(),
  details: z.string(),
});

const scheduleSchemaCreate = scheduleSchema.omit({
  id: true,
  details: true,
  userId: true,
});

const scheduleSchemaRead = scheduleSchema.array();

export { scheduleSchema, scheduleSchemaCreate, scheduleSchemaRead };
