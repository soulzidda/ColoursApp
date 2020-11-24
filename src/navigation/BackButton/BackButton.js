import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function BackButton(props) {
  const {colour} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
      style={styles.container}>
      <Icon color={colour} name={'arrow-left'} size={24} />
    </TouchableOpacity>
  );
}

export default BackButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 35,
    left: 12,
  },
});
