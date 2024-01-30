import { _setRecipeDetails, _setRecipes, _setSearchRecipe } from ".";
import { store } from "../../app";

export const setRecipes = (receipes) => store.dispatch(_setRecipes(receipes))
export const setRecipeDetails = (receipe_id) => store.dispatch(_setRecipeDetails(receipe_id))
export const setSearchRecipe = (searched_text) => store.dispatch(_setSearchRecipe(searched_text))