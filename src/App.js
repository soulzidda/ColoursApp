import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import {ColoursTab} from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {navigationService} from './navigation/Navigation.service';
import {Provider} from 'react-redux';
import store from './redux/index';

export const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Provider store={store}>
          <NavigationContainer
            ref={(navigationRef) =>
              (navigationService.navigator = navigationRef)
            }>
            <ColoursTab />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};
