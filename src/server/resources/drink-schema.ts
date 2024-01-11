import { AllowedSchema } from "express-json-validator-middleware";

const drinkSchema: AllowedSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    official: {
      type: "boolean",
    },
    ingredients: {
      type: "array",
      maxItems: 99,
      items: {
        type: "object",
        properties: {
          ingredient: {
            type: "string",
          },
          amount: {
            type: "string",
          },
          required: {
            type: "boolean",
          },
        },
        required: ["ingredient", "amount", "required"],
      },
    },
    instructions: {
      type: "array",
      maxItems: 99,
      items: {
        type: "object",
        properties: {
          step: {
            type: "integer",
          },
          instruction: {
            type: "string",
          },
        },
        required: ["step", "instruction"],
      },
    },
    imageUrls: {
      type: "array",
      maxItems: 10,
      items: {
        type: "string",
      },
    },
    createdBy: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
        name: {
          type: "string",
        },
      },
      required: ["id", "name"],
    },
  },
  required: [
    "name",
    "official",
    "ingredients",
    "instructions",
    "imageUrls",
    "createdBy",
  ],
};

export default drinkSchema;
