import { z } from "zod";
import {
  addressesSchema,
  addressesSchemaCreateSchema,
} from "./addresses.schema";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  address: addressesSchemaCreateSchema,
  categoryId: z.number(),
});

const realEstateSchemaCreate = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
});

const realEstateReadSchema = realEstateSchema.array();

export { realEstateSchema, realEstateSchemaCreate, realEstateReadSchema };
