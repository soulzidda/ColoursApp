import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {ColoursNavigation} from './src/navigation/navigation'

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <ColoursNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  )
}
