import {
  usersSchema,
  usersSchemaCreate,
  usersReadSchema,
  usersUpdateSchema,
  usersResultsSchema,
} from "./users.schema";

import {
  addressesSchema,
  addressesSchemaCreateSchema,
} from "./addresses.schema";

import {
  realEstateSchema,
  realEstateSchemaCreate,
  realEstateReadSchema,
} from "./realEstates.schema";

import {
  categoriesSchema,
  categoriesSchemaCreate,
  categoriesReadSchema,
} from "./categories.schema";

import {
  scheduleSchema,
  scheduleSchemaCreate,
  scheduleSchemaRead,
} from "./schedules.schema";

import { sessionCreate } from "./session.schema";

export {
  usersReadSchema,
  usersResultsSchema,
  usersSchema,
  usersSchemaCreate,
  usersUpdateSchema,
  addressesSchema,
  addressesSchemaCreateSchema,
  realEstateReadSchema,
  realEstateSchema,
  realEstateSchemaCreate,
  categoriesReadSchema,
  categoriesSchema,
  categoriesSchemaCreate,
  scheduleSchema,
  scheduleSchemaCreate,
  sessionCreate,
};
