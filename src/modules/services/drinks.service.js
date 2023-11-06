import drinksController from "../controllers/drinks.controller.js";

class DrinksService {
  getDrinkById = async (req, res) => {
    const id = req.params.id;

    console.log(id);

    const drink = await drinksController.getDrinkById(id);

    return res.status(200).json(drink);
  };
}

export default new DrinksService();
