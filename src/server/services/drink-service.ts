import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Drink, ingredient } from "../types/Drink";
import {
  PutCommandOutput,
  ScanCommandOutput,
  UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import {
  insertDrink,
  queryDrinksById,
  queryDrinksByName,
  updateDrinkNameById,
} from "../database/drink-database";

const getDrinkById = async (req: Request, res: Response) => {
  const id = req.params.id;

  console.log(id);

  const response = await queryDrinksById(id);

  if (response.$metadata.httpStatusCode != 200) {
    return res.status(404).json({ message: `No item found for id: ${id}` });
  }

  return res.status(200).json(response.Item);
};

const createNewDrink = async (req: Request, res: Response) => {
  const body: Drink = req.body;

  const drink: Drink = {
    drinkId: uuidv4(),
    name: body.name,
    official: body.official,
    ingredients: body.ingredients,
    instructions: body.instructions,
    imageUrls: body.imageUrls,
    createdBy: body.createdBy,
    createdAt: Date.now(),
  };

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

const updateDrink = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  if (!id || !name) {
    res.status(400).json({
      message:
        "Missing one of the following data points: id, name, ingredients, instructions",
    });
  }

  const response: UpdateCommandOutput = await updateDrinkNameById(id, name);

  if (response.$metadata.httpStatusCode != 200) {
    res.sendStatus(500);
  }

  res.sendStatus(200);
};

export { getDrinkById, createNewDrink, getDrinkByName, updateDrink };
