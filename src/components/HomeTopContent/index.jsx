import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchInput from '../searchInput';

const HomeTopContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.hello_text}>Hello Şuayip Emre</Text>

            <Text style={styles.make_text}>Make your own food,</Text>

            <Text style={styles.stay_text}>
                Stay at <Text style={styles.home_text}>Home</Text>
            </Text>

            <SearchInput />

        </View>
    )
}

export default HomeTopContent


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
   
})