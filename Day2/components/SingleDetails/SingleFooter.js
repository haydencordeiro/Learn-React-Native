import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Icon } from 'react-native-elements'
import NumericInput from 'react-native-numeric-input'

export default function SingleFooter() {

  return (
      <View>
  <View style={styles.container}>
      <Text style={{color:"#11493E",fontFamily: 'Oswald_400Regular',fontSize:18,}}>Indoor</Text>
      <Text style={{color:"#202020",fontFamily: 'Oswald_600SemiBold',fontSize:35,}}>Aglonema</Text>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center" ,marginTop:10}}>


      <NumericInput 
            
            onChange={value =>console.log({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={100} 
            totalHeight={40} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#808080' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#11493E' 
            leftButtonBackgroundColor='#11493E'/>
      <Text style={{color:"#191919",fontFamily: 'Oswald_600SemiBold',fontSize:30,}}>₹45</Text>

      </View>
      <Text style={{color:"#808080",fontFamily: 'Oswald_400Regular',fontSize:16}}>Lorem Ipsum is simply dummy text of the printing industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</Text>

  </View>
  <View style={styles.buyButton}>
  <Icon name='shopping-cart'  type='feather' color='#ffff'  size={32}  style={{padding:10}}/>

  <Text style={{color:"#ffff",fontFamily: 'Oswald_400Regular',fontSize:27,}}>Add To Cart</Text>
  </View>
  </View>);
}
const styles = StyleSheet.create({
  container: {
      marginTop:40,
      margin:20,
    backgroundColor:"transparent",

  },
  buyButton:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      marginTop:13,
        height:70,

      width:windowWidth,
      backgroundColor:"#11493E",
  }
  
});

