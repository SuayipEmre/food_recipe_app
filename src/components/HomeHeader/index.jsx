import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {BellIcon} from 'react-native-heroicons/outline'


const { height} = Dimensions.get('window')

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/avatar.png')}  style={styles.avatar}/>
      <BellIcon color='gray' size={height * 0.04} />
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    container:{
        flexDirection :'row', 
        alignItems:'center',
        justifyContent :'space-between',
    },
    avatar : {
        width : height * 0.05,
        height : height * 0.05
    },
})