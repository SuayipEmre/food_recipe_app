import { View, ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import HomeHeader from '../../components/homeContent/header'
import TopContent from '../../components/homeContent/topContent'
import Categories from '../../components/homeContent/categories'
import Recipes from '../../components/homeContent/recipes'
import { useFetchCategoriesQuery, useFetchRecipesQuery } from '../../store/features/APIs'
import {  useCategory } from '../../store/features/categories/hooks'
import { setCategories } from '../../store/features/categories/actions'
import { setRecipes } from '../../store/features/recipe/actions'

const HomeScreen = () => {
  const category = useCategory()

  const { isLoading: isLoadingCategories, isError: isErrorCategories, data: categoriesData } = useFetchCategoriesQuery()
  const { isLoading: isLoadingRecipes, isError: isErrorRecipes, data: recipesData } = useFetchRecipesQuery(category)


  useEffect(() => {
    getCategories()
  }, [isLoadingCategories, isErrorCategories, categoriesData])

  useEffect(() => {
    getRecipes()
  }, [isLoadingRecipes, isErrorRecipes, recipesData])


  const getCategories = () => {
    if (!isLoadingCategories && !isErrorCategories) {
      setCategories(categoriesData.categories)
    }
  }

  const getRecipes = async () => {
    if (!isLoadingRecipes && !isErrorRecipes) {
      setRecipes(recipesData.meals)
    }
  }


  const renderCategories = () => {
    if (isLoadingCategories) return <ActivityIndicator />
    else if (isErrorCategories) return <Text> There was a issue. Please try again</Text>
    return <Categories />
  }

  const renderRecipes = () => {
    if (isLoadingRecipes) return <ActivityIndicator />
    else if (isErrorRecipes) return <Text> There was a issue. Please try again</Text>
    return <Recipes />
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, }}>
      < StatusBar barStyle="dark-content" />


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, }}>

        <HomeHeader />
        <TopContent />

        {
          renderCategories()
        }

        {
          renderRecipes()
        }
      </ScrollView>
    </View>
  )
}

export default HomeScreen