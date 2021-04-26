import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'
import { Text } from 'react-native-elements';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HomeNav() {
  return (
    <View style={styles.container}>
      <Text></Text>
  
    <View style={styles.topContainer}>
      <Icon name='shopping-bag'  type='feather'  color='#303033' style={{padding:10,}}/>
      <Icon name='align-center'  type='feather'  color='#303033'  style={{padding:10,}}/>
    </View>
    <View style={styles.bottomContainer}>
    


    <Text h2>Featured</Text>

    </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       
    },
    topContainer:{
        padding:10,
        flexDirection:"row",
        justifyContent:'flex-end',
        // backgroundColor:"blue",

    },
    bottomContainer:{
        padding:10,
        paddingLeft:20,
        // backgroundColor:"green"

    }
});
