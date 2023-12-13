import { NextFunction, Request, Response } from "express";
import market from "./database";
import { Product } from "./interfaces";

const idExists = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const { id } = req.params;

  const productIndex: number = market.findIndex(
    (v: Product): boolean => v.id === Number(id)
  );

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found." });
  }

  const foundProduct = market[productIndex];

  res.locals = { ...res.locals, productIndex, foundProduct };

  return next();
};

const uniqueName = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const { name } = req.body;

  if (!name) {
    return next();
  }

  const foundProduct: Product | undefined = market.find(
    (s: Product): boolean => s.name === name
  );

  if (foundProduct) {
    return res.status(409).json({ message: "Product already registered." });
  }

  return next();
};

export default { idExists, uniqueName };
