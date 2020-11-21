import {Animated} from 'react-native';

class AnimateService {
  DEFAULT_SPRING_CONFIG = {
    friction: 9,
    tension: 40,
  };

  animate(animated, toValue) {
    Animated.spring(animated, {
      toValue: toValue,
      useNativeDriver: false,
      ...this.DEFAULT_SPRING_CONFIG,
    }).start();
  }
}

export const animateService = new AnimateService();
