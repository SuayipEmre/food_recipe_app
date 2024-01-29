import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { useFetchRecipesDetailsQuery } from '../../store/features/APIs';
import { setRecipeDetails } from '../../store/features/recipe/actions';
import RecipeDetails from '../../components/recipeDetails';

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { data } = route.params
  const [isFavorite, setIsFavorite] = useState(false)

  const { isLoading, isError, data: recipeDetailsData, } = useFetchRecipesDetailsQuery(data.idMeal)

  useEffect(() => {
    getRecipeDetails()
  }, [isLoading, data, isError, recipeDetailsData])

  const getRecipeDetails = () => {

    if (!isError && !isLoading) {
      setRecipeDetails(recipeDetailsData.meals[0])
    }
  }

  const renderRecipeDetails = () => {

    if (isError) return <Text>There was a issue. Please try again</Text>
    else if (isLoading) return <ActivityIndicator />

    return <RecipeDetails />
  }
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      backgroundColor: '#fff',
      alignItems: 'center',

    }}>
      <Image source={{ uri: data.strMealThumb }} style={styles.image} />

      <StatusBar style='light' />


      <View style={styles.header_icons_container}>

        <View style={styles.icon_container}>
          <ChevronLeftIcon size={hp(3.5)} strokeWidth={3.5} color='#fbbf24' onPress={() => navigation.goBack()} />
        </View>


        <TouchableOpacity style={styles.icon_container} activeOpacity={.7} onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon size={hp(3.5)} strokeWidth={3.5} color={isFavorite ? 'red' : 'gray'} />
        </TouchableOpacity>


      </View>

      {
        renderRecipeDetails()
      }

    </ScrollView>
  )
}

export default RecipeDetailsScreen


export const styles = StyleSheet.create({
  image: {
    width: wp(98),
    height: hp(50),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 4,

  },
  header_icons_container: {
    position: 'absolute',
    top: hp(10),
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,

  },
  icon_container: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
})