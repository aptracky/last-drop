import express, { NextFunction, Request, Response } from "express";
import {
  createNewDrink,
  getDrinkById,
  getDrinkByName,
  updateDrink,
} from "../services/drink-service";
import { Validator } from "express-json-validator-middleware";
import drinkSchema from "../resources/drink-schema";

const router = express.Router();
const validator = new Validator({});

router.post("/", validator.validate({ body: drinkSchema }), createNewDrink);
router.put("/", updateDrink);
router.post("/search", getDrinkByName);
router.get("/:id", getDrinkById);

export { router as drinksRouter };
