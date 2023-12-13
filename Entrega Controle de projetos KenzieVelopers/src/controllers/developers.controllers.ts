import { Request, Response } from "express";
import { Developers } from "../interfaces";
import { developersServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const develop: Developers = await developersServices.create(req.body);
  return res.status(201).json(develop);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const develop: Developers = await developersServices.partialUpdate(
    req.body,
    req.params.id
  );
  return res.status(200).json(develop);
};

const retriever = async (req: Request, res: Response): Promise<Response> => {
  const develop: Developers = await developersServices.retriever(req.params.id);
  return res.status(200).json(develop);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await developersServices.destroy(req.params.id);
  return res.status(204).json();
};

export default { create, retriever, partialUpdate, destroy };
