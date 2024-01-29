import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ClockIcon} from 'react-native-heroicons/outline'

const Information = ({icon, value, text}) => {
    return (
        <View style={styles.container}>

            <View style={styles.content_wrapper}>

                <View style={styles.icon_container}>
               
                    {icon}
                </View>

                <Text style={styles.mins}>{value}</Text>
                <Text>{text}</Text>
            </View>

        </View>
    )
}

export default Information

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor: '#fcd34d',
        padding : 8,
        borderRadius : 12,

    },
    content_wrapper: {
        gap:6,
        marginVertical: 6,
        alignItems:'center'
    },
    icon_container: {
        height: 40,
        width: 40,
        borderRadius : 20,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',

    },
    mins:{
        fontWeight: '500'
    },
})