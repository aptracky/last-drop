import {
  BatchGetCommand,
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
  UpdateCommand,
} from "@aws-sdk/lib-dynamodb";
import { dynamoClient } from "../utils/dynamodb";
import { Drink } from "../types/drink.type";
import { log } from "console";

const TABLE_NAME = "last-drop-drinks";
const docClient = DynamoDBDocumentClient.from(dynamoClient);

//TABLE SCHEMA
// DrinkId = PK

const queryDrinksById = async (id: string) => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: {
      drinkId: id,
    },
  });

  const response = await docClient.send(command);
  return response;
};

const queryDrinksForIds = async (ids: string[]) => {
  log("Starting to queryDrinks for ids");

  const keys = createListOfKeys(ids);
  const command = new BatchGetCommand({
    RequestItems: {
      "last-drop-drinks": {
        Keys: keys,
      },
    },
  });

  const response = await docClient.send(command);

  return response;
};

const insertDrink = async (drink: Drink) => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      ...drink,
    },
  });

  const response = await docClient.send(command);
  return response;
};

const queryDrinksByName = async (searchTerm: string) => {
  const command = new ScanCommand({
    TableName: TABLE_NAME,
    FilterExpression: "contains(#name, :name)",
    ExpressionAttributeNames: { "#name": "name" },
    ExpressionAttributeValues: { ":name": searchTerm },
  });

  const response = await docClient.send(command);
  return response;
};

const updateDrinkNameById = async (id: string, name: string) => {
  const command = new UpdateCommand({
    TableName: TABLE_NAME,
    Key: { drinkId: id },
    UpdateExpression: "set #name = :name",
    ExpressionAttributeNames: {
      "#name": "name",
    },
    ExpressionAttributeValues: {
      ":name": name,
    },
    ReturnValues: "ALL_NEW",
  });

  const response = await docClient.send(command);
  return response;
};

const createListOfKeys = (ids: string[]) => {
  const list: object[] = [];

  ids.forEach((id) => {
    list.push({
      drinkId: id,
    });
  });

  return list;
};

export {
  queryDrinksById,
  insertDrink,
  queryDrinksByName,
  updateDrinkNameById,
  queryDrinksForIds,
};
