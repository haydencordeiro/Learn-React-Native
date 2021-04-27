import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

import SingleHeader from '../components/SingleDetails/SingleHeader'
import SingleFooter from '../components/SingleDetails/SingleFooter'

export default function SingleDetails() {

  return (
      <View>

          <SingleHeader />
          <SingleFooter />
      </View>
  
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  
});

