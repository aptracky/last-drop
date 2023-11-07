"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const drinks_js_1 = require("./routes/drinks.js");
const app = (0, express_1.default)();
const port = process.env.PORT;
// Cors Setup
const allowedOrigins = [`http://localhost:${port}`];
const options = {
    origin: allowedOrigins,
};
// Middleware
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use((0, morgan_1.default)("common"));
//Routes
app.use("/api/drinks", drinks_js_1.drinksRouter);
//Default Route
app.get("/api", (req, res) => {
    res.send("Welcome to Last-Drop");
});
exports.default = app;
