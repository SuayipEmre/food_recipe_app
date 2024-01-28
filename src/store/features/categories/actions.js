import { _setCategories, _setCategory, _setRecipes } from ".";
import { store } from "../../app";

export const setCategories = (categories) => store.dispatch(_setCategories(categories))
export const setCategory = (category) => store.dispatch(_setCategory(category))