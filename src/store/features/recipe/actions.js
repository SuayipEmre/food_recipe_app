import { _setRecipeDetails, _setRecipes } from ".";
import { store } from "../../app";

export const setRecipes = (receipes) => store.dispatch(_setRecipes(receipes))
export const setRecipeDetails = (receipe_id) => store.dispatch(_setRecipeDetails(receipe_id))