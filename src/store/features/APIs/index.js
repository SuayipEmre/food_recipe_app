import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 const recipesApi =  createApi({
    reducerPath : 'receipeApi',

    baseQuery : fetchBaseQuery({
        baseUrl : 'https://themealdb.com/api/json/v1/1/'
    }),

    endpoints : (builder) => ({

        fetchCategories : builder.query({
            query : () => {
              return {
                url : 'categories.php',
                method : 'GET'
              }
            }
        }),

        fetchRecipes : builder.query({
            query : (category) => {
              return  {
                url : `filter.php`,
                method : 'GET',
                params : {
                    c : category
                }
              }
            }
        })
    })
})


export const {useFetchCategoriesQuery, useFetchRecipesQuery} = recipesApi
export default recipesApi