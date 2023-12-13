import { Request, Response } from "express";
import { DeveloperInfos, DeveloperInfosCreate } from "../interfaces";
import { developersInfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const payload: DeveloperInfosCreate = {
    ...req.body,
    developerId: req.params.id,
  };
  const developInfo: DeveloperInfos = await developersInfosServices.create(
    payload
  );
  return res.status(201).json(developInfo);
};

export default { create };
