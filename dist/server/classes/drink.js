"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDrink = void 0;
const uuid_1 = require("uuid");
function createDrink(drinkName, user) {
    const drinkId = (0, uuid_1.v4)();
    const name = drinkName;
    const createdBy = user;
    const createdAt = new Date(Date.now()).toISOString();
    let instructions = [];
    let ingredients = [];
    function getInstructions() {
        return instructions;
    }
    function setInstructions(input) {
        instructions = input;
    }
    function getIngredients() {
        return ingredients;
    }
    function setIngredients(input) {
        ingredients = input;
    }
    return { getInstructions, setInstructions, getIngredients, setIngredients };
}
exports.createDrink = createDrink;
