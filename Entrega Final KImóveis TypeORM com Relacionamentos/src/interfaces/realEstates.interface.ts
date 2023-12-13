import { z } from "zod";
import { realEstateReadSchema, realEstateSchemaCreate } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof realEstateSchemaCreate>;
type RealEstateRead = z.infer<typeof realEstateReadSchema>;

type RealEstateRepo = Repository<RealEstate>;

export { RealEstateCreate, RealEstateRead, RealEstateRepo };
