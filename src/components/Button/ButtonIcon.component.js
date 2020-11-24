import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = (props) => {
  const {onPress, iconName, colour} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={24} color={colour} />
    </TouchableOpacity>
  );
};

export default Button;
