import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

const CatalogueScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Catalogue'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text style={{paddingVertical: 10}}>
            This screen to begin will just contain the catalogue of colours, it
            will require a Flatlist component.
          </Text>
          <Text style={{paddingVertical: 10}}>
            The flatlist will not have a separate screen to begin with, this
            gives me an opportunity to play with and learn to properly implement
            the Animate library
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CatalogueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content_container: {
    paddingHorizontal: 20,
  },
  text_container: {
    paddingVertical: 10,
  },
});
