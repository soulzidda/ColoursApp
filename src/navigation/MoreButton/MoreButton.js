import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {animateService} from '../../logic/Animate';

const shadow = {
  DOWN: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.84,
    elevation: 2,
  },
};

export function MoreButton(props) {
  const {onOptionPress, options, width = 120} = props;

  const [menuVisible, showMenu] = useState(false);

  const angleAnimation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const angle = angleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  useEffect(() => {
    animateService.animate(angleAnimation, menuVisible ? 1 : 0);
    animateService.animate(opacity, menuVisible ? 1 : 0);
  }, [angleAnimation, menuVisible, opacity]);

  return (
    <TouchableOpacity
      onPress={() => showMenu(!menuVisible)}
      style={{
        position: 'absolute',
        zIndex: 100,
        top: 38,
        right: 12,
      }}>
      <View>
        <Animated.View style={{transform: [{rotateZ: angle}], zIndex: 120}}>
          <Icon
            name="dots-three-horizontal"
            onPress={() => showMenu(!menuVisible)}
            size={20}
          />
        </Animated.View>
        {menuVisible && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                top: -12,
                right: -12,
                backgroundColor: 'red',
                borderTopLeftRadius: 24,
                borderBottomLeftRadius: 24,
                width,
                paddingVertical: 8,
                paddingHorizontal: 16,
                opacity,
              },
              shadow.DOWN,
            ]}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={{
                  padding: 4,
                  backgroundColor: 'red',
                  width: '100%',
                }}
                onPress={() => {
                  onOptionPress(option);
                  showMenu(false);
                }}>
                <Text style={{textTransform: 'uppercase'}}>{option}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        )}
      </View>
    </TouchableOpacity>
  );
}
