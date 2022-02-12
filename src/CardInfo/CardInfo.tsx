import React from 'react'
import styled from 'styled-components/native'
import {ViewProps, View} from 'react-native'
import {IHotelData} from '../Master'

export interface ICardInfoProps extends ViewProps {
  hotelData: IHotelData
}

export const CardInfo: React.FC<ICardInfoProps> = ({hotelData, ...props}) => {
  return (
    <Wrapper {...props}>
      <TitleView>
        <Text>{hotelData.name}</Text>
        <Text>{hotelData.stars}</Text>
      </TitleView>
      <Image source={{uri: hotelData.gallery[0]}} />
    </Wrapper>
  )
}

const Text = styled.Text`
  font-weight: 700;
  margin-right: 5px;
`
const Image = styled.Image`
  width: 100px;
  height: 100px;
`
const TitleView = styled(View)`
  flex-direction: row;
`

const Wrapper = styled(View)`
  padding: ${({theme}) => theme.dimensions.padding.simple}px;
  margin: ${({theme}) => theme.dimensions.margin.simple}px;
  border-radius: ${({theme}) => theme.dimensions.radius}px;
  border: 1px solid ${({theme}) => theme.colors.black};
`
