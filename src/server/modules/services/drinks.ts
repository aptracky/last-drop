import { Request, Response } from "express";
import { getDrinkByIdController } from "../controllers/drinks.controller.js";

const getDrinkById = async (req: Request, res: Response) => {
  const id = req.params.id;

  console.log(id);

  const drink = await getDrinkByIdController(id);

  if (!drink) {
    return res.status(404).json({ message: `No item found for id: ${id}` });
  }

  return res.status(200).json(drink);
};

export { getDrinkById };
