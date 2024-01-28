import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Animated, { FadeInDown } from 'react-native-reanimated'
import { useCategories, useCategory } from '../../../store/features/categories/hooks';
import { setCategory } from '../../../store/features/categories/actions';

const Categories = () => {
    const categories = useCategories()

    const activeCategory = useCategory()
    return (

        <Animated.View entering={FadeInDown.duration(500).springify()}>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, marginTop: 20, }}
            >

                {
                    categories.map(item => (
                        <TouchableOpacity key={item.idCategory} activeOpacity={.9} style={styles.category_container} onPress={() => setCategory(item.strCategory)}>

                            <View style={[styles.image_container, activeCategory == item.strCategory && styles.active_image_container]}>
                                <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
                            </View>

                            <Text style={styles.category_name}>
                                {item.strCategory}
                            </Text>


                        </TouchableOpacity>
                    ))
                }

            </ScrollView>

        </Animated.View>
    )
}

export default Categories

const styles = StyleSheet.create({
    image_container: {
        width: hp(6),
        height: hp(6),
        borderRadius: hp(6),
        padding: 6,
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
    },
    active_image_container: {
        backgroundColor: '#f59e0b',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    category_container: {
        alignItems: 'center'
    },
    category_name: {
        fontSize: hp(1.6),
        color: '#525252'
    },
})