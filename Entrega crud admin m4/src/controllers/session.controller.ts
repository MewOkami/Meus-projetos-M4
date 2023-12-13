import { Request, Response } from "express";
import { SessionReturn } from "../interfaces";
import { sessionServces } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: SessionReturn = await sessionServces.create(req.body);
  return res.status(201).json(token);
};

export default { create };
