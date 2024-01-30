import {  ScrollView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useFetchCategoriesQuery, useFetchRecipesQuery } from '../../store/features/APIs'
import { useCategory } from '../../store/features/categories/hooks'
import { setCategories } from '../../store/features/categories/actions'
import { setRecipes } from '../../store/features/recipe/actions'
import Categories from '../../components/categories'
import HomeHeader from '../../components/HomeHeader'
import Recipes from '../../components/recipes'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeTopContent from '../../components/HomeTopContent'

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
    else if (isErrorCategories) return <Text> There was an issue. Please try again</Text>
    return <Categories />
  }

  const renderRecipes = () => {
    if (isLoadingRecipes) return <ActivityIndicator />
    else if (isErrorRecipes) return <Text> There was an issue. Please try again</Text>
    return <Recipes />
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 12, }}>
      <StatusBar barStyle="dark-content" />


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, }}>

        <HomeHeader />
        <HomeTopContent />

        {
          renderCategories()
        }

        {
          renderRecipes()
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen