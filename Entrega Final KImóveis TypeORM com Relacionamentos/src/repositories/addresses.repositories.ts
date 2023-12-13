import { AppDataSource } from "../data-source";
import { Address } from "../entities";

export default AppDataSource.getRepository(Address);
