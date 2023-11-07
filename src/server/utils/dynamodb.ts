import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const region = process.env.REGION;

const client = new DynamoDBClient({ region: region });

export { client as dynamoClient };
