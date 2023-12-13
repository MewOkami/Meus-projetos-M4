import { Request, Response } from "express";
import { userServices } from "../services";
import { UserResult } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserResult = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users = await userServices.read();
  return res.status(200).json(users);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundEntity } = res.locals;
  const { body } = req;

  const user = await userServices.partialUpdate(foundEntity, body);

  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, destroy, partialUpdate };
