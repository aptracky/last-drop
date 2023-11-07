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
exports.getDrinkById = void 0;
const drinks_controller_js_1 = require("../controllers/drinks.controller.js");
const getDrinkById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    console.log(id);
    const drink = yield (0, drinks_controller_js_1.getDrinkByIdController)(id);
    if (!drink) {
        return res.status(404).json({ message: `No item found for id: ${id}` });
    }
    return res.status(200).json(drink);
});
exports.getDrinkById = getDrinkById;
