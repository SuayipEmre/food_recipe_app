import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TopContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello_text}>Hello Şuayip Emre</Text>

            <Text style={styles.make_text}>Make your own food,</Text>

            <Text style={styles.stay_text}>
                Stay at <Text style={styles.home_text}>home</Text>
            </Text>

            <View style={styles.input_container}>
                <TextInput
                  autoCapitalize='none'
                  autoCorrect={false} 
                  selectionColor='#f59e0b'
                  placeholder='Search any recipe' style={styles.input} placeholderTextColor='#525252' cursorColor='red' />

                <View style={styles.search_icon}>
                    <MagnifyingGlassIcon strokeWidth={3} color='gray' size={hp(2.5)}  />
                </View>
            </View>


        </View>
    )
}

export default TopContent


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        gap: 8,
    },
    hello_text: {
        fontWeight: '300',
        fontSize: hp(1.4),

    },
    make_text: {
        fontSize: hp(4),
        fontWeight: '600'
    },
    stay_text: {
        fontSize: hp(3),
        fontWeight: '600'
    },
    home_text: {
        color: '#f59e0b',
    },
    input_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        height: hp(6),
        paddingHorizontal: 12,
        borderRadius: hp(3),
        marginTop : 15,
    },
    input: {
        fontSize: hp(1.4),
        paddingHorizontal: 3,
        flex: 1,
        height : '100%'
    },
    search_icon: {
        backgroundColor: '#fff',
        width: wp(10),
        height: wp(10),
        borderRadius :wp(10),
        alignItems:'center',
        justifyContent: 'center',
    },
})