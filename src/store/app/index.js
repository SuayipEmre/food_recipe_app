import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import recipesApi from '../features/APIs'
import recipe from "../features/recipe";
import categories from "../features/categories";
export const store = configureStore({
  reducer: {

    recipes: recipe,
    categories: categories,

    [recipesApi.reducerPath]: recipesApi.reducer

  },
  middleware: (getDefaultMiddleware) => {
    return (
      getDefaultMiddleware()
        .concat(recipesApi.middleware)
    )
  }
})


setupListeners(store.dispatch)