import { AppDataSource } from "../data-source";
import { Category } from "../entities";

export default AppDataSource.getRepository(Category);
