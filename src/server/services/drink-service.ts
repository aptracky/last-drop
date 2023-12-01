import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Drink } from "../types/Drink";
import { PutCommandOutput, ScanCommandOutput } from "@aws-sdk/lib-dynamodb";
import {
  insertDrink,
  queryDrinksById,
  queryDrinksByName,
} from "../database/drink-database";

const getDrinkById = async (req: Request, res: Response) => {
  const id = req.params.id;

  console.log(id);

  const drink = await queryDrinksById(id);

  if (drink.$metadata.httpStatusCode != 200) {
    return res.status(404).json({ message: `No item found for id: ${id}` });
  }

  return res.status(200).json(drink);
};

const createNewDrink = async (req: Request, res: Response) => {
  const body = req.body;

  const drink: Drink = { drinkId: uuidv4(), ...body };

  const response: PutCommandOutput = await insertDrink(drink);

  if (response.$metadata.httpStatusCode != 200) {
    return res.sendStatus(500);
  }

  return res.status(200).json(response);
};

const getDrinkByName = async (req: Request, res: Response) => {
  const { name } = req.body;

  const response: ScanCommandOutput = await queryDrinksByName(name);

  if (response.$metadata.httpStatusCode != 200) {
    return res.sendStatus(500);
  }

  res.json(response.Items);
};

export { getDrinkById, createNewDrink, getDrinkByName };
