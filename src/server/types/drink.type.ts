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
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type Ingredient = {
  ingredient: string;
  amount: string;
  required: boolean;
  imageUrl?: string;
};

export type Instruction = {
  step: number;
  instruction: string;
};
