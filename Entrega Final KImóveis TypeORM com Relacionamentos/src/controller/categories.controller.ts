import { Request, Response } from "express";
import { CategoryCreate } from "../interfaces";
import { categoriesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: CategoryCreate = await categoriesServices.create(req.body);
  return res.status(201).json(category);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const category = await categoriesServices.read();
  return res.status(200).json(category);
};

export default { create, read };
