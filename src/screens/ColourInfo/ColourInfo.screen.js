import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../navigation/BackButton/BackButton';
import {colours} from '../../styles/colours';

const ColourInfoScreen = () => {
  return (
    <SafeAreaView>
      <BackButton colour={colours.black} />
      <Text>I am the Colour info Screen</Text>
    </SafeAreaView>
  );
};

export default ColourInfoScreen;
