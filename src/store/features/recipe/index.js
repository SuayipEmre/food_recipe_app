import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    recipes  : []
}
export const recipes = createSlice({
    name : 'recipes',
    initialState,
    reducers: {
      
        
        _setRecipes :(state, action) => {
          state.recipes = action.payload
        }
    }
})


export const {_setRecipes} = recipes.actions
export default recipes.reducer