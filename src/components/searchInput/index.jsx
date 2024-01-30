import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { useSearchRecipe } from '../../store/features/recipe/hooks'
import { setSearchRecipe } from '../../store/features/recipe/actions'

const SearchInput = () => {
    const searchRecipe = useSearchRecipe()
    console.log(searchRecipe);

    const handleChange = (e) => {
        setSearchRecipe(e)
        console.log(searchRecipe);
    }
    return (
        <View style={styles.input_container}>
            <TextInput
                value={searchRecipe}
                autoCapitalize='none'
                autoCorrect={false}
                selectionColor='#f59e0b'
                placeholder='Search any recipe' style={styles.input} placeholderTextColor='#525252' cursorColor='red'
                onChangeText={(e) => handleChange(e)}
            />

            <View style={styles.search_icon}>
                <MagnifyingGlassIcon strokeWidth={3} color='gray' size={hp(2.5)} />
            </View>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    input_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        height: hp(6),
        paddingHorizontal: 12,
        borderRadius: hp(3),
        marginTop: 15,
    },
    input: {
        fontSize: hp(1.4),
        paddingHorizontal: 3,
        flex: 1,
        height: '100%'
    },
    search_icon: {
        backgroundColor: '#fff',
        width: wp(10),
        height: wp(10),
        borderRadius: wp(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
})