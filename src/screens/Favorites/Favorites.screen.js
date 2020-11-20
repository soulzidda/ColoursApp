import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

const FavoritesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Favorite colours'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text style={styles.text}>
            Here we will store our favorite colours, it will be the same as the
            catalogue except that it only contains the colours we put there.
          </Text>
          <Text style={styles.text}>
            just like the catalogue it will have the ability to find the colour
            in the store and add it to the basket.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesScreen;

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
  text: {
    marginVertical: 10,
  },
});
