"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewDrinkController = exports.getDrinkByIdController = void 0;
const drinks_database_js_1 = require("../database/drinks.database.js");
const getDrinkByIdController = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const drink = yield (0, drinks_database_js_1.getDrinkById)(id);
    return drink.Item;
});
exports.getDrinkByIdController = getDrinkByIdController;
const createNewDrinkController = (drink) => __awaiter(void 0, void 0, void 0, function* () {
    const newDrink = yield (0, drinks_database_js_1.createDrink)(drink);
    return newDrink;
});
exports.createNewDrinkController = createNewDrinkController;
