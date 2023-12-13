import { sign } from "jsonwebtoken";
import { User } from "../entities";
import { AppError } from "../errors";
import { SessionCreate, SessionReturn } from "../interfaces";
import { usersRepositories } from "../repositories";
import { compare } from "bcryptjs";

const create = async ({
  email,
  password,
}: SessionCreate): Promise<SessionReturn> => {
  const foundUser: User | null = await usersRepositories.findOneBy({ email });
  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const samePwd: boolean = await compare(password, foundUser.password);
  if (!samePwd) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { admin: foundUser.admin },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { create };
