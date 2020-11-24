import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function BackButton(props) {
  const {colour} = props;
  const navigation = useNavigation();

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}>
      <Icon style={[styles.button, {colour}]} name={'arrow-left'} size={24} />
    </TouchableOpacity>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 35,
    left: 12,
  },
});
