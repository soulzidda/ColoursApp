import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import {ColoursTab} from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './redux/index';

export const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Provider store={store}>
          <NavigationContainer>
            <ColoursTab />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};
