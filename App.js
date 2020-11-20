import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ColoursNavigation} from './src/navigation/navigation';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

export const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Provider store={Store}>
          <NavigationContainer>
            <ColoursNavigation />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </>
  );
};
