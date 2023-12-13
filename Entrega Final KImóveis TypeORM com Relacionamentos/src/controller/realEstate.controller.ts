import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: RealEstate = await realEstateServices.create(
    res.locals.foundEntityCategory,
    req.body
  );
  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const users = await realEstateServices.read();
  return res.status(200).json(users);
};

export default { create, read };
