import { AppDataSource } from "../data-source";
import { User } from "../entities";

export default AppDataSource.getRepository(User);
