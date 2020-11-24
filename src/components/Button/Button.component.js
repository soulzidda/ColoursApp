import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colours} from '../../styles/colours';

const Button = (props) => {
  const {backgroundColor, border, onPress, title, width} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          borderWidth: border ? 1 : 0,
          width: width,
        },
      ]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    width: 100,
    alignSelf: 'center',
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colours.black,
  },
});
