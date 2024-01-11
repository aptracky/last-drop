export type Drink = {
  drinkId: string;
  name: string;
  imageUrls: string[];
  official: boolean;
  createdBy: {
    userId: string;
    name: string;
  };
  createdAt: number;
  ingredients: ingredient[];
  instructions: instruction[];
};

export type ingredient = {
  ingredient: string;
  amount: string;
  required: boolean;
  imageUrl?: string;
};

export type instruction = {
  step: number;
  instruction: string;
};
