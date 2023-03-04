import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealsGetAll";

export type MealProps = {
  title: string,
  data: [
    {
      id: string, 
      name: string,
      hour: string,
      description: string,
      status: string,
    }
  ];
}

export async function mealCreate({title, data}: MealProps) {
  try {
    const storedMeals = await mealGetAll();

    const dateAlreadyExists = storedMeals.find((item: MealProps) => item.title === title);

    if (dateAlreadyExists) {
      dateAlreadyExists.data = [...dateAlreadyExists.data, ...data];
    } else {
      storedMeals.push({ title, data });
    }
    const storage = JSON.stringify(storedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}