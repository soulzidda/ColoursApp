import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../navigation/BackButton/BackButton';
import {colours} from '../../styles/colours';
import Header from '../../components/Header/Header.component';

const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton colour={colours.black} />
      <Header label={'Checkout'} />
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
});
