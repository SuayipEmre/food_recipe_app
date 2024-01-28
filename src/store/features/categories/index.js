import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    category : 'Beef',
    categories : [],
}
export const categories = createSlice({
    name : 'recipes',
    initialState,
    reducers: {
      
        _setCategory : (state, action) => {
          state.category = action.payload
        },
        
        _setCategories : (state, action) => {
            state.categories = action.payload
          },
          
       
    }
})

export const {_setCategory, _setCategories} = categories.actions
export default categories.reducer