"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamoClient = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const region = process.env.REGION;
const client = new client_dynamodb_1.DynamoDBClient({ region: region });
exports.dynamoClient = client;
