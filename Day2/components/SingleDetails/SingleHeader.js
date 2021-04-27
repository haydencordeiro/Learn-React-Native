import React from 'react';
import { View,Text,StyleSheet ,Image} from 'react-native';

import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Icon } from 'react-native-elements'

export default function SingleHeader() {

  return(
    <View style={styles.container}>
        <View style={styles.navbar}>
            <Icon name='chevron-left' type='material' color='#ffff' size={40} style={{padding:10}}/>
            <Icon name='search'  type='material' color='#ffff'  size={34}  style={{padding:10}}/>
        </View>
        <View style={styles.headerContentContainer}> 
    
       
            <View style={styles.textContentContainer}>

                <View style={{marginBottom:40,padding:20,}}>
                <Text style={{ fontFamily: 'Oswald_400Regular',fontSize:18,color:"#ffff" }}>Size</Text>
                <Text style={{ fontFamily: 'Oswald_600SemiBold',fontSize:23 ,color:"#ffff",lineHeight: 26,}}>Small</Text>
                <View style={{height:16}}></View>
                <Text style={{ fontFamily: 'Oswald_400Regular' ,fontSize:18,color:"#ffff"}}>Family</Text>
                <Text style={{ fontFamily: 'Oswald_600SemiBold',fontSize:23,color:"#ffff",lineHeight: 26, }}>Casctaceae</Text>
                </View>

            </View>
            <View style={styles.imgContentContainer}>
           <View>
            <Image
                style={{height:400,width:300, backgroundColor: 'transparent',resizeMode:"cover",transform: [{ translateX: -86 },{ translateY: 140 }]}}
                source={require('../../assets/pottedplan.png')}
                /> 
                <View style={{ position:"relative",top:22,marginLeft:135}}> 
                    <Icon
                
                
                        raised
                        name='favorite'
                        type='material'
                        color='#11493E'
                        onPress={() => console.log('hello')} />
                    </View>
            </View>
            
            
            </View>         
            
        </View>
    </View>  
    );
}
const styles = StyleSheet.create({
  container: {
  

  },
  navbar:{
      height:60,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#11493E",
    padding:10
  },
  headerContentContainer:{
    height:270,
    width:windowWidth,
    flexDirection:"row",
    
}, 
textContentContainer:{
    flex:1,
    flexDirection:"row",
    backgroundColor:"#11493E",
    // backgroundColor:"red",
    width:windowWidth*0.4,
    borderBottomStartRadius:50,
    alignItems:"flex-end",
},
imgContentContainer:{
    flex:1.5,
    borderBottomEndRadius:50,
    flexDirection:"row",
    backgroundColor:"#11493E",

    // backgroundColor:"orange",
    width:windowWidth*0.4,
    alignItems:"flex-end",

  }
  
});

