import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const region = process.env.REGION || "us-east-1";
const accessKeyId = process.env.AWS_KEY || "";
const secretAccessKey = process.env.AWS_SECRET || "";

const client = new DynamoDBClient({
  credentials: { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey },
  region: region,
});

export { client as dynamoClient };
