import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {categoryData} from '../../../constants/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const Categories = () => {
  return (
    <View>
      
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap : 12, marginTop : 20,}}
      >

        {
            categoryData.map(item => (
                <TouchableOpacity key={item.name} activeOpacity={.9} style={styles.category_container}>

                    <View style={styles.image_container}>
                        <Image source={{uri : item.image}} style={styles.image} />
                    </View>
                    
                    <Text style={styles.category_name}>
                        {item.name}
                    </Text>


                </TouchableOpacity>
            ))
        }

      </ScrollView>

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    image_container:{
        width : hp(6),
        height : hp(6),
        borderRadius : hp(6),
        padding : 6,
    },
    image:{
        width : '100%',
        height : '100%',
        resizeMode : 'cover'
    },
    category_container:{
        alignItems:'center'
    },
    category_name:{
        fontSize : hp(1.6),
        color : '#525252'
    },
})