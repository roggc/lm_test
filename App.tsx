/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Master} from './src/Master'
import {ThemeProvider} from 'styled-components/native'
import {myTheme} from './src/myTheme'

const {Navigator, Screen} = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={myTheme}>
        <Navigator>
          <Screen component={Master} name="lm_test" />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
