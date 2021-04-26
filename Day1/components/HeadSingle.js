import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function BodySingle() {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}}
       style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     padding:10,
     backgroundColor:"white",
     borderRadius:30,

  },

  image:{
    backgroundColor:"#ffff",
    resizeMode: "center",
    width: windowWidth*0.8,
     height: windowHeight*0.3,
  }
});
