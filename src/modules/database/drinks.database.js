import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";
import { dynamoClient } from "../../utils/dynamodb.js";

const TABLE_NAME = "last-drop-drinks";
const docClient = DynamoDBDocumentClient.from(dynamoClient);

//TABLE SCHEMA
// DrinkId = PK
// DrinkType = SK
// ...
class DrinksDatabase {
  getDrinkById = async (id) => {
    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        DrinkId: id,
        DrinkType: "VODKA",
      },
    });

    const response = await docClient.send(command);
    return response;
  };

  getAllDrinksByType = async (input) => {
    const command = new ScanCommand({
      TableName: TABLE_NAME,
      FilterExpression: "DrinkType = :drinkType",
      ExpressionAttributeValues: {
        ":drinkType": { S: input },
      },
    });

    const response = await dynamoClient.send(command);
    return response;
  };

  createDrink = async (drink) => {
    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        drink,
      },
    });

    const response = await docClient.send(command);
    return response;
  };
}

export default new DrinksDatabase();
