import { Drink } from "../../types/Drink.js";
import { createDrink, getDrinkById } from "../database/drinks.database";

const getDrinkByIdController = async (id: string) => {
  const drink = await getDrinkById(id);
  return drink.Item;
};
const createNewDrinkController = async (drink: Drink) => {
  const newDrink = await createDrink(drink);
  return newDrink;
};

export { getDrinkByIdController, createNewDrinkController };
