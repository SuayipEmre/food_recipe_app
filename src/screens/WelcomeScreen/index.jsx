import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
const { width, height } = Dimensions.get('window')

const WelcomeScreen = ({ navigation }) => {



    const firstRingpadding = useSharedValue(0)
    const secondRingpadding = useSharedValue(0)

    
    useEffect(() => {
        setTimeout(() => firstRingpadding.value = withSpring(firstRingpadding.value + height * 0.05 ), 100)
        setTimeout(() => secondRingpadding.value = withSpring(secondRingpadding.value + height * 0.055 ), 100)
        setTimeout( () => navigation.navigate('HomeNavigator'), 4000 ) 
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />



            <Animated.View style={[{
                padding: firstRingpadding
            }, styles.first_ring]}>
                <Animated.View style={[{ padding: secondRingpadding }, styles.second_ring]}>
                    <Image source={require('../../../assets/images/welcome.png')} style={styles.image} />
                </Animated.View>
            </Animated.View>

            <View style={styles.text_container}>
                <Text style={styles.title}>Foody</Text>
                <Text style={styles.text}>Food is always right</Text>
            </View>

        </SafeAreaView>
    )
}

export default WelcomeScreen



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f59e0b',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    first_ring: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: width / 2,
    },
    second_ring: {
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: width / 2,
    },
    image: {
        width: 200,
        height: 200,
    },
    text_container: {},
    title: {
        fontSize: width * 0.2,
        color: '#fff',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 21,
        color: '#fff',
        fontWeight: '500'
    },

})