import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList,StyleSheet,Text, View,Image } from 'react-native';
import { Dimensions } from 'react-native';

import BodySingle from '../components/BodySingle'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
export default function SaleList({name}) {
  console.log(name);
    return (
        <View style={{marginTop:18}}>
        <View style={styles.titleContainer}>
            <Text  style={{fontSize:24,fontWeight:"bold",}}>{name}</Text>
            <Text  style={{color:"#C4AE8B",fontSize:18}}>View All</Text>

        </View>
            
            
        <FlatList
        data={DATA}
        horizontal
        renderItem={()=>
        <View style={{margin:5}}>
        <BodySingle></BodySingle>
        </View> }
        keyExtractor={item => item.id}
      />
      
      
        
        </View>
      );
    }

const styles = StyleSheet.create({

    titleContainer:{
        margin:10,
        marginLeft:13,
        marginRight:13,
        flexDirection:"row",
        justifyContent:"space-between"
        
    },
    

});
