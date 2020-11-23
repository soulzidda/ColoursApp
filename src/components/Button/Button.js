import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        {
          backgroundColor: props.backgroundColor,
          borderWidth: props.border ? 1 : 0,
          width: props.width,
        },
      ]}>
      <Text style={styles.buttonText}>{props.title}</Text>
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
    color: 'black',
  },
});
