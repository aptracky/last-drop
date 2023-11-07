"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drinksRouter = void 0;
const express_1 = __importDefault(require("express"));
const drinks_1 = require("../modules/services/drinks");
const router = express_1.default.Router();
exports.drinksRouter = router;
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
router.get("/drink/:id", drinks_1.getDrinkById);
