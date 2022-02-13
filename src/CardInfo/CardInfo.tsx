import React from 'react'
import styled from 'styled-components/native'
import {ViewProps, View} from 'react-native'
import {IHotelData} from '../../App'
import {Stars} from '../Stars'

export interface ICardInfoProps extends ViewProps {
  hotelData: IHotelData
}

export const CardInfo: React.FC<ICardInfoProps> = ({hotelData, ...props}) => {
  return (
    <Wrapper {...props}>
      <TitleView>
        <Text>{hotelData.name}</Text>
        <Stars numberOfStars={hotelData.stars} />
        <Text>{hotelData.userRating}</Text>
      </TitleView>
      <ImagesWrapper horizontal>
        {hotelData.gallery.map(pic => (
          <Image source={{uri: pic}} key={pic} />
        ))}
      </ImagesWrapper>
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
  border-radius: ${({theme}) => theme.dimensions.radius}px;
  margin: 5px;
`
const TitleView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`

const Wrapper = styled(View)`
  padding: ${({theme}) => theme.dimensions.padding.simple}px;
  margin: ${({theme}) => theme.dimensions.margin.simple}px;
  border-radius: ${({theme}) => theme.dimensions.radius}px;
  border: 1px solid ${({theme}) => theme.colors.black};
`

const ImagesWrapper = styled.ScrollView``
