import { useSelector } from "react-redux";

export const useRecipes = () => useSelector(state => state.recipes.recipes)
export const useRecipeDetails = () => useSelector(state => state.recipes.recipeDetails)