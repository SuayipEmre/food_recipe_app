import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recipes  : [],
    recipeDetails : []
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
          }
    }
})


export const {_setRecipes, _setRecipeDetails} = recipes.actions
export default recipes.reducer