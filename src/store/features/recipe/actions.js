import { _setRecipes } from ".";
import { store } from "../../app";

export const setRecipes = (receipe) => store.dispatch(_setRecipes(receipe))