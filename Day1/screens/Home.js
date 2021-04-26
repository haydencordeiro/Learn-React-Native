import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import HeadSingle from '../components/HeadSingle'

import HomeNav from '../components/HomeNav'
import SaleList from '../components/SaleList'

const DataC = [
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
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d712',
    title: 'Fourth Item',
  },  {
    id: '58694a0f-3da1-471f-bd96-145571e129d72',
    title: 'Fifth Item',
  },  {
    id: '58694a0f-3da1-471f-bd96-1451571e29d72',
    title: 'Sixth Item',
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
       
      <HomeNav></HomeNav>
      <View style={{alignItems:"center",marginTop:6}}>

      <HeadSingle></HeadSingle> 
      </View>
    {/* <SaleList></SaleList> */}
 
                
            
    <FlatList
        data={DataC}
        
        renderItem={({item})=>
        <View style={{margin:10}}>
      <SaleList name={item["title"]} ></SaleList>
        </View> }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#F0F0F0",
  },
});
