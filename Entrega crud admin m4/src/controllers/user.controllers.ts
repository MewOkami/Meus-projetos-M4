import { Request, Response, response } from "express";
import { User, UserRead } from "../interfaces";
import { usersServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user = await usersServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await usersServices.read();
  return res.status(200).json(users);
};

const retriever = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await usersServices.retriever(req.params.id);
  return res.status(200).json(user);
};

export default { create, read, retriever };
