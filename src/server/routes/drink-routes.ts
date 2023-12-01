import express, { NextFunction, Request, Response } from "express";
import {
  createNewDrink,
  getDrinkById,
  getDrinkByName,
} from "../services/drink-service";

const router = express.Router();

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

router.post("/", createNewDrink);

router.get("/drink/:id", getDrinkById);

router.post("/search", getDrinkByName);

export { router as drinksRouter };
