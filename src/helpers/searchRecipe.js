import { useSearchRecipe } from "../store/features/recipe/hooks"



export const filterRecipe = (recipes) => {
  const searchTitle = useSearchRecipe()

  let filteredRecipes = []
  filteredRecipes = recipes

  if(searchTitle){
    filteredRecipes = recipes.filter(item => item.strMeal.toLowerCase().includes(searchTitle.toLowerCase()))
  }

  return filteredRecipes
}