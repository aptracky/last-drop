import drinksDatabase from "../database/drinks.database.js";

class DrinkController {
  getDrinkById = async (id) => {
    const drink = await drinksDatabase.getDrinkById(id);
    return drink.Item;
  };
  createDrink = async (drink) => {
    const newDrink = await drinksDatabase.createDrink(drink);
    return newDrink.Item;
  };
  getDrinksByType = async (type) => {
    const drinks = await drinksDatabase.getAllDrinksByType(type);
    return drinks;
  };
}

export default new DrinkController();
