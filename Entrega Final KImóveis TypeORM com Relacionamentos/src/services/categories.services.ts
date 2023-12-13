import { Category } from "../entities";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { categoriesRepositories } from "../repositories";

const create = async (payload: CategoryCreate): Promise<CategoryCreate> => {
  const category: Category = categoriesRepositories.create(payload);
  await categoriesRepositories.save(category);
  return category;
};

const read = async (): Promise<CategoryRead> => {
  return await categoriesRepositories.find();
};

export default { create, read };
