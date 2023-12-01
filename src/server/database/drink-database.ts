import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
import { dynamoClient } from "../utils/dynamodb";
import { Drink } from "../types/Drink";

const TABLE_NAME = "last-drop-drinks";
const docClient = DynamoDBDocumentClient.from(dynamoClient);

//TABLE SCHEMA
// DrinkId = PK

const queryDrinksById = async (id: string) => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: {
      DrinkId: id,
    },
  });

  const response = await docClient.send(command);
  return response;
};

const insertDrink = async (drink: Drink) => {
  const command = new PutCommand({
    TableName: TABLE_NAME,
    Item: {
      DrinkId: drink.drinkId,
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

export { queryDrinksById, insertDrink, queryDrinksByName };
