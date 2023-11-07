export interface Drink {
  drinkId: string;
  name: string;
  imageUrl: string[];
  official: boolean;
  createdBy: {
    id: string;
    name: string;
  };
  createdAt: number;
  ingredients: {
    ingredient: string;
    amount: string;
    required: boolean;
    imageUrl: string;
  }[];
  instructions: {
    step: number;
    instruction: string;
  }[];
}
