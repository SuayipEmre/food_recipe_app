import { View, Text, ScrollView} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import React from 'react'
import HomeHeader from '../../components/homeContent/header'
import TopContent from '../../components/homeContent/topContent'
import Categories from '../../components/homeContent/categories'

const HomeScreen = () => {
  return (
    <View style={{backgroundColor : '#fff', flex :1, paddingHorizontal : 12,}}>
      <StatusBar style='dark'/>
    

    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{paddingBottom : 50,}}
    >


    {/*header */}
    <HomeHeader />

    <TopContent />
    <Categories />

    </ScrollView>
    </View>
  )
}

export default HomeScreen