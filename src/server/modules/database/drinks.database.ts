import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { dynamoClient } from "../../utils/dynamodb";
import { Drink } from "../../types/Drink";

const TABLE_NAME = "last-drop-drinks";
const docClient = DynamoDBDocumentClient.from(dynamoClient);

//TABLE SCHEMA
// DrinkId = PK

const getDrinkById = async (id: String) => {
  const command = new GetCommand({
    TableName: TABLE_NAME,
    Key: {
      DrinkId: id,
    },
  });

  const response = await docClient.send(command);
  return response;
};

const createDrink = async (drink: Drink) => {
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

export { getDrinkById, createDrink };
