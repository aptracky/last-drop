import express from "express";
import drinksService from "../modules/services/drinks.service.js";

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

// define the about route
router.get("/", (req, res) => {
  // Call Service Layer

  // check response from service layer

  // send api response

  res.send("All Drinks");
});

router.get("/drink/:id", drinksService.getDrinkById);

export { router as drinksRouter };
