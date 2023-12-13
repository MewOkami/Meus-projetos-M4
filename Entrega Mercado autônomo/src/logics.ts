import { Request, Response } from "express";
import { Product } from "./interfaces";
import market from "./database";

let id = 1;

const totalPrice = (arr: Product[]): number => {
  return arr.reduce((ac, va) => ac + va.price, 0);
};

const create = (req: Request, res: Response): Response => {
  const expirationDate: Date = new Date(Date.now() + 1000 * 60 * 60 * 24 * 365);

  const newProduct: Product = {
    id: id++,
    ...req.body,
    expirationDate,
  };

  market.push(newProduct);

  return res.status(201).json(newProduct);
};

let products = market;

const readProduct = (req: Request, res: Response): Response => {
  return res.status(200).json({ total: totalPrice(market), products });
};

const retrieve = (req: Request, res: Response): Response => {
  const { foundProduct } = res.locals;
  return res.status(200).json(foundProduct);
};

const destroy = (req: Request, res: Response): Response => {
  const { productIndex } = res.locals;

  market.splice(productIndex, 1);

  return res.status(204).json();
};

const partialUpdate = (req: Request, res: Response): Response => {
  const { productIndex } = res.locals;

  market[productIndex] = {
    ...market[productIndex],
    ...req.body,
  };

  const updateProducts = market[productIndex];

  return res.status(200).json(updateProducts);
};

export default { create, readProduct, retrieve, destroy, partialUpdate };
