import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRecipeDetails } from '../../store/features/recipe/hooks'
import Information from './informations';
import { ClockIcon, FireIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/outline';
import YoutubeIframe from 'react-native-youtube-iframe';

const RecipeDetails = () => {

    const recipeDetails = useRecipeDetails()

    const ingredientsIndexes = (meal) => {
        if (!meal) return []

        let indexes = []

        for (let i = 1; i <= 20; i++) {
            if (meal['strIngredient' + i]) {
                indexes.push(i)
            }
        }

        return indexes
    }


    const getYoutubeVideoId = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if (match && match[1]) {
            return match[1];
        }
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{recipeDetails?.strMeal}</Text>

            <Text style={styles.area_text}>{recipeDetails?.strArea}</Text>

            <View style={styles.information_container}>
                <Information icon={<ClockIcon size={hp(4)} strokeWidth={2.5} color='#525252' />} value='35' text='mins' />
                <Information icon={<UsersIcon size={hp(4)} strokeWidth={2.5} color='#525252' />} value='10' text='Servings' />
                <Information icon={<FireIcon size={hp(4)} strokeWidth={2.5} color='#525252' />} value={'103'} text='cal' />
                <Information icon={<Square3Stack3DIcon size={hp(4)} strokeWidth={2.5} color='#525252' />} text='Easy' />
            </View>

            <Text style={styles.sub_title}>Ingredients</Text>
            {
                ingredientsIndexes(recipeDetails).map(item => (
                    <View key={item} style={styles.ingredients_container}>
                        <View style={styles.round} />

                        <View style={styles.ingredients_content}>
                            <Text style={styles.measure_text}>{recipeDetails['strMeasure' + item]}</Text>
                            <Text style={styles.ingredients_text}>{recipeDetails['strIngredient' + item]}</Text>
                        </View>
                    </View>
                ))
            }

            <View>
                <Text style={styles.sub_title}>Instructions</Text>
                <Text>
                    {recipeDetails?.strInstructions}
                </Text>
            </View>

            {
                recipeDetails.strYoutube && (
                    <View>
                        <Text style={styles.sub_title}>Recipe Video</Text>

                        <View>
                            <YoutubeIframe
                                videoId={getYoutubeVideoId(recipeDetails.strYoutube)}
                                height={hp(30)}
                            />
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default RecipeDetails


export const styles = StyleSheet.create({
    container: {
        width: wp(100),
        paddingHorizontal: 12,
        marginTop: 15,
    },
    title: {
        fontSize: 30,
        color: '#404040',

    },
    area_text: {
        marginVertical: 12,
        opacity: 50,
        fontWeight: '300',
    },
    information_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 6,
    },
    sub_title: {
        fontSize: 20,
        fontWeight: '400',
        marginVertical: 12,
    },
    ingredients_container: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    round: {
        width: hp(1.5),
        height: hp(1.5),
        backgroundColor: '#fcd34d',
        borderRadius: hp(0.75)
    },
    ingredients_content: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    measure_text: {
        fontWeight: '700',
        color: '#525252',
        fontSize: hp(1.7)
    },
    ingredients_text: {
        fontWeight: '400',
        color: '#525252',
        fontSize: hp(1.7)
    },
})