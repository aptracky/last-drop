import cors, { CorsOptions } from "cors";
import express from "express";
import morgan from "morgan";
import { drinksRouter } from "./routes/drink-routes";

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

//Routes
app.use("/api/drinks", drinksRouter);

//Default Route
app.get("/api", (req, res) => {
  res.send("Welcome to Last-Drop");
});

export default app;
