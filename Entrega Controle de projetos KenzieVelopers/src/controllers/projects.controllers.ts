import { Request, Response } from "express";
import { Projects } from "../interfaces";
import { projectsServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const develop: Projects = await projectsServices.create(req.body);
  return res.status(201).json(develop);
};

const partialUpdate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const develop: Projects = await projectsServices.partialUpdate(
    req.body,
    req.params.id
  );
  return res.status(200).json(develop);
};

const retriever = async (req: Request, res: Response): Promise<Response> => {
  const develop: Projects = await projectsServices.retriever(req.params.id);
  return res.status(200).json(develop);
};

export default { create, retriever, partialUpdate };
