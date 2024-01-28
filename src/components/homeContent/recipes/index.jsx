import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RecipeCard from './card';
import { useCategories } from '../../../store/features/categories/hooks';
import { useRecipes } from '../../../store/features/recipe/hooks';

const Recipes = () => {
    const categories = useCategories()
    const recipes = useRecipes()



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recipes</Text>
            {
                categories.length == 0 ? null : (
                    <MasonryList
                        data={recipes}
                        keyExtractor={(item) => item?.idMeal}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, i }) => <RecipeCard item={item} index={i} />}
                        onEndReachedThreshold={0.1}
                    />
                )
            } 
        </View>
    )
}

export default Recipes


const styles = StyleSheet.create({
    container: {
        marginTop: 14,
        gap: 12,
    },
    title: {
        fontSize: hp(4),
        fontWeight: '500'
    },
})