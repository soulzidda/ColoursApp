import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Welcome'} backgroundColour={'white'} />
      <View style={styles.content_container}>
        <View style={styles.text_container}>
          <Text>
            I am the information, i will tell what the purpose of the app is and
            what it will be doing.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
