import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { 
  useFonts,
  Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold  
} from '@expo-google-fonts/oswald'


export default function App() {
  let [fontsLoaded] = useFonts({
   
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold 
  });

  if (!fontsLoaded) {
    return <View ></View>;
  }

  return <Text style={{ fontFamily: 'Oswald_500Medium' }}>Inter Black</Text>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});

