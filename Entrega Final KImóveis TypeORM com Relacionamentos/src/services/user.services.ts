import { User } from "../entities";
import { UserCreate, UserRead, UserResult, UserUpdate } from "../interfaces";
import { usersRepositories } from "../repositories";
import { usersReadSchema, usersResultsSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<UserResult> => {
  const user: User = usersRepositories.create(payload);
  await usersRepositories.save(user);
  return usersResultsSchema.parse(user);
};

const read = async (): Promise<UserRead> => {
  return usersReadSchema.parse(await usersRepositories.find());
};

// const read = async (): Promise<UserRead> => {
//   return usersReadSchema.parse(await usersRepositories.findOne({
//     where: {id: id}, relations: {schedule: true}}));
// };

const partialUpdate = async (
  user: User,
  payload: UserUpdate
): Promise<UserResult> => {
  return usersResultsSchema.parse(
    await usersRepositories.save({ ...user, ...payload })
  );
};

const destroy = async (user: User): Promise<void> => {
  await usersRepositories.softRemove(user);
};

export default { create, read, destroy, partialUpdate };
