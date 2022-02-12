import React from 'react'
import styled from 'styled-components/native'
import {ViewProps} from 'react-native'
import {IHotelData} from '../Master'

export interface ICardInfoProps extends ViewProps {
  hotelData: IHotelData
}

export const CardInfo: React.FC<ICardInfoProps> = ({hotelData, ...props}) => {
  return (
    <View {...props}>
      <Text>{hotelData.name}</Text>
      <Image source={{uri: hotelData.gallery[0]}} />
    </View>
  )
}

const View = styled.View``
const Text = styled.Text``
const Image = styled.Image`
  width: 100px;
  height: 100px;
`
