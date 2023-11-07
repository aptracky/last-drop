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
exports.createDrink = exports.getDrinkById = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamodb_1 = require("../../utils/dynamodb");
const TABLE_NAME = "last-drop-drinks";
const docClient = lib_dynamodb_1.DynamoDBDocumentClient.from(dynamodb_1.dynamoClient);
//TABLE SCHEMA
// DrinkId = PK
const getDrinkById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const command = new lib_dynamodb_1.GetCommand({
        TableName: TABLE_NAME,
        Key: {
            DrinkId: id,
        },
    });
    const response = yield docClient.send(command);
    return response;
});
exports.getDrinkById = getDrinkById;
const createDrink = (drink) => __awaiter(void 0, void 0, void 0, function* () {
    const command = new lib_dynamodb_1.PutCommand({
        TableName: TABLE_NAME,
        Item: {
            drink,
        },
    });
    const response = yield docClient.send(command);
    return response;
});
exports.createDrink = createDrink;
