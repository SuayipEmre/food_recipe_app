import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated,{FadeInDown} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';

const RecipeCard = ({ item, index }) => {

    
    const navigation = useNavigation()

    let isEven = index % 2 == 0
    return (
        <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify()}>
            <TouchableOpacity style={[{
                paddingLeft: isEven ? 0 : 8,
                paddingRight: isEven ? 8 : 0
            }, styles.button]}
            onPress={() => navigation.navigate('RecipeDetails', {
                data : item
            })}
            >

                <Image
                    style={[{
                        height : index % 3 == 0 ? hp(25) : hp(35)
                    },styles.image]}
                    source={{ uri: item.strMealThumb }}

                />
                <Text style={styles.foodname_text}>
                    {
                        item.strMeal.length > 20 ? item.strMeal.slice(0, 20) + '...' : item.strMeal
                    }
                    
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default RecipeCard

const styles = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent:'center',
         marginBottom : 16,
    },
    image: {
        width: '100%',
        borderRadius : 35,
    },
    foodname_text:{
        fontSize : hp(1.5),
        fontWeight : '300',
        paddingLeft : hp(1),
        marginTop :4,
    },
})