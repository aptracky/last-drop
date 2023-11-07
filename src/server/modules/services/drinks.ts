import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createNewDrinkController,
  getDrinkByIdController,
} from "../controllers/drinks.controller";
import { Drink } from "../../types/Drink";
import { PutCommandOutput } from "@aws-sdk/lib-dynamodb";

const getDrinkById = async (req: Request, res: Response) => {
  const id = req.params.id;

  console.log(id);

  const drink = await getDrinkByIdController(id);

  if (!drink) {
    return res.status(404).json({ message: `No item found for id: ${id}` });
  }

  return res.status(200).json(drink);
};

const createNewDrink = async (req: Request, res: Response) => {
  const { name } = req.body;

  const drink: Drink = { drinkId: uuidv4(), name: name };

  const response: PutCommandOutput = await createNewDrinkController(drink);

  if (response.$metadata.httpStatusCode != 200) {
    return res.sendStatus(500);
  }

  return res.sendStatus(200);
};

export { getDrinkById, createNewDrink };
