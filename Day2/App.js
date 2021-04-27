import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { View,Text,StyleSheet } from 'react-native';
import SingleDetails from './screens/SingleDetails';
import { useFonts,Oswald_400Regular,Oswald_500Medium,Oswald_600SemiBold,Oswald_700Bold } from '@expo-google-fonts/oswald'

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

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#11493E" />
      <SingleDetails/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});

