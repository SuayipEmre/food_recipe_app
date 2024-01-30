import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recipes  : [],
    recipeDetails : [],
    searchRecipe : ''
}
export const recipes = createSlice({
    name : 'recipes',
    initialState,
    reducers: {
      
        
        _setRecipes :(state, action) => {
          state.recipes = action.payload
        },

        _setRecipeDetails :(state, action) => {
            state.recipeDetails = action.payload
          },
          _setSearchRecipe :(state, action) => {
            state.searchRecipe = action.payload
          },
    }
})


export const {_setRecipes, _setRecipeDetails, _setSearchRecipe} = recipes.actions
export default recipes.reducer