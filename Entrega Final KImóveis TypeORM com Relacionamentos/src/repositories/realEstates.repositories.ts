import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";

export default AppDataSource.getRepository(RealEstate);
