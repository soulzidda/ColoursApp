import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

const ShopScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Shop'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text>
            Here will be the interface for the webshop. To begin just display
            all colours, perhaps filters at the top. create button at top right
            for the checkout button
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShopScreen;

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
