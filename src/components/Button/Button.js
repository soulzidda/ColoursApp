import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginBottom: 10,
    maxWidth: 100,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
  },
});
