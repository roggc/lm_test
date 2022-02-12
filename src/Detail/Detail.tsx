import React from 'react'
import styled from 'styled-components/native'
import {ViewProps, View as V} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackProps} from '../../App'

type ScreenProps = NativeStackScreenProps<RootStackProps, 'HotelDetails'>

export interface IDetailProps extends ViewProps {}

export const Detail = ({route}: ScreenProps) => {
  const {hotelData} = route.params
  return (
    <View>
      <Text>{hotelData.name}</Text>
    </View>
  )
}

const View = styled(V)``
const Text = styled.Text``
