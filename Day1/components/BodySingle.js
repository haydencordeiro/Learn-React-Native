import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function HeadSingle() {
    return (
        <View style={styles.container}>
          <Image source={{uri: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"}}
           style={styles.image} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
         padding:10,
         backgroundColor:"white",
         borderRadius:8,
         elevation:1,
    
      },
    
      image:{
        backgroundColor:"#ffff",
        resizeMode: "center",
        width: windowWidth*0.4,
         height: windowHeight*0.2,
      }
    });
    