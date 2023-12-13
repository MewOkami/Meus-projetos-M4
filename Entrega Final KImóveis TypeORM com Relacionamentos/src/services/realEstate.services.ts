import { Response } from "express";
import { Address, Category, RealEstate } from "../entities";
import { RealEstateCreate, RealEstateRead } from "../interfaces";
import {
  addressesRepositories,
  realEstatesRepositories,
} from "../repositories";
import { realEstateReadSchema } from "../schemas";

const create = async (
  category: Category,
  { categoryId, address, ...payload }: RealEstateCreate
): Promise<RealEstate> => {
  console.log(category);
  const newAddress = await addressesRepositories.save(address);

  const realEstate: RealEstate = realEstatesRepositories.create({
    address: newAddress,
    ...payload,
    category: category,
  });
  await realEstatesRepositories.save(realEstate);
  return realEstate;
};

const read = async (): Promise<RealEstateRead> => {
  return realEstateReadSchema.parse(await realEstatesRepositories.find());
};

export default { create, read };
