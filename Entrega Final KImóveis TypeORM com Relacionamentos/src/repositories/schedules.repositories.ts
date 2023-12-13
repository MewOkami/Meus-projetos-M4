import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";

export default AppDataSource.getRepository(Schedule);
