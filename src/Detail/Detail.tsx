import React from 'react'
import styled from 'styled-components/native'
import {ViewProps, View as V, Dimensions} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackProps} from '../../App'
import {Stars} from '../Stars'
import {myTheme} from '../myTheme'

type ScreenProps = NativeStackScreenProps<RootStackProps, 'HotelDetails'>

export interface IDetailProps extends ViewProps {}

export const Detail = ({route}: ScreenProps) => {
  const {hotelData} = route.params

  return (
    <ViewWrapper>
      <InfoWrapper>
        <StarsWrapper>
          <Text>{hotelData.userRating}</Text>
          <Stars numberOfStars={hotelData.stars} color={myTheme.colors.red} />
        </StarsWrapper>
      </InfoWrapper>
      <V>
        <ImagesWrapper horizontal>
          {hotelData.gallery.map(pic => (
            <Image source={{uri: pic}} width={Dimensions.get('screen').width} />
          ))}
        </ImagesWrapper>
      </V>
    </ViewWrapper>
  )
}

const ViewWrapper = styled(V)`
  flex: 1;
  justify-content: space-between;
`

const Image = styled.Image<{width: number}>`
  width: ${({width}) => width}px;
  height: ${({width}) => width}px;
  border-radius: ${({theme}) => theme.dimensions.radius}px;
  margin: 5px;
`

const ImagesWrapper = styled.ScrollView``

const InfoWrapper = styled(V)`
  padding: ${({theme}) => theme.dimensions.padding.simple}px;
  margin: ${({theme}) => theme.dimensions.margin.simple}px;
  border-radius: ${({theme}) => theme.dimensions.radius}px;
  border: 1px solid ${({theme}) => theme.colors.black};
  flex: 1;
`

const StarsWrapper = styled(V)`
  flex-direction: row;
  justify-content: space-between;
`
const Text = styled.Text`
  font-size: 25px;
`
