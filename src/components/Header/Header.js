import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
  const {backgroundColour, label} = props;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColour ? backgroundColour : 'black'},
      ]}>
      <View style={styles.text_container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 80,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
