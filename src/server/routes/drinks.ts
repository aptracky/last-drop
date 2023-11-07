import express, { NextFunction, Request, Response } from "express";
import { createNewDrink, getDrinkById } from "../modules/services/drinks";

const router = express.Router();

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
  next();
});

// define the about route
router.get("/", (req: Request, res: Response) => {
  // Call Service Layer

  // check response from service layer

  // send api response

  res.send("All Drinks");
});

router.post("/", createNewDrink);

router.get("/drink/:id", getDrinkById);

export { router as drinksRouter };
