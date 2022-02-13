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
import {Detail} from './src/Detail'

interface IHourRange {
  from: string
  to: string
}

export interface IHotelData {
  checkIn: IHourRange
  checkOut: IHourRange
  contact: {
    email: string
    phoneNumber: string
  }
  currency: string
  gallery: string[]
  id: number
  location: {
    address: string
    city: string
    latitude: number
    longitude: number
  }
  name: string
  price: number
  stars: number
  userRating: number
}

export type RootStackProps = {
  Hotels: undefined
  HotelDetails: {hotelData: IHotelData}
}

const {Navigator, Screen} = createNativeStackNavigator<RootStackProps>()

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={myTheme}>
        <Navigator>
          <Screen component={Master} name="Hotels" />
          <Screen
            component={Detail}
            name="HotelDetails"
            options={({route}) => ({
              title: route.params.hotelData.name,
            })}
          />
        </Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

export default App
