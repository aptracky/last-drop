import cors, { CorsOptions } from "cors";
import express, { NextFunction, Request, Response, urlencoded } from "express";
import morgan from "morgan";
import { drinksRouter } from "./routes/drink-routes";
import { ValidationError } from "express-json-validator-middleware";

const app = express();

const port = process.env.PORT;

// Cors Setup
const allowedOrigins = [`http://localhost:${port}`];
const options: CorsOptions = {
  origin: allowedOrigins,
};

// Middleware
app.use(cors(options));
app.use(express.json());
app.use(morgan("common"));

/**
 * Error handler middleware for validation errors.
 */
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log("MiddleWare");
    // Check the error is a validation error
    if (error instanceof ValidationError) {
      // Handle the error
      response.status(400).send(error.validationErrors);
      next();
    } else {
      // Pass error on if not a validation error
      next(error);
    }
  }
);

//Routes
app.use("/api/drinks", drinksRouter);

//Default Route
app.get("/api", (req, res) => {
  res.send("Welcome to Last-Drop");
});

export default app;
