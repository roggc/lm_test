import React, {useState} from 'react'
import styled from 'styled-components/native'
import {ViewProps, View as V} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackProps} from '../../App'
import {Stars} from '../Stars'
import {myTheme} from '../myTheme'
import I from 'react-native-vector-icons/FontAwesome5'

const PADDING_PLUS_MARGIN_WIDTH_CORRECTOR_FACTOR = 30

type ScreenProps = NativeStackScreenProps<RootStackProps, 'HotelDetails'>

export interface IDetailProps extends ViewProps {}

export const Detail = ({route}: ScreenProps) => {
  const {hotelData} = route.params
  const [width, setWidth] = useState(0)

  return (
    <ViewWrapper>
      <InfoWrapper
        onLayout={event => {
          const {width: width_} = event.nativeEvent.layout
          setWidth(width_)
        }}>
        <InfoWrapperWrapper>
          <StarsWrapper>
            <UserRating>{hotelData.userRating}</UserRating>
            <Stars numberOfStars={hotelData.stars} color={myTheme.colors.red} />
          </StarsWrapper>
          <Line>
            <BlockWrapper>
              <Line>
                <V>
                  <Text>Chek in</Text>
                  <Text>Chek out</Text>
                  <Icon name="mobile-alt" solid />
                  <Icon name="envelope-square" solid />
                </V>
                <V>
                  <Text>
                    {hotelData.checkIn.from} - {hotelData.checkIn.to}
                  </Text>
                  <Text>
                    {hotelData.checkOut.from} - {hotelData.checkOut.to}
                  </Text>
                  <Text>{hotelData.contact.phoneNumber}</Text>
                  <Text>{hotelData.contact.email}</Text>
                </V>
              </Line>
            </BlockWrapper>
            <BlockWrapper>
              <LineEnd>
                <Text>
                  {hotelData.price} {hotelData.currency}
                </Text>
              </LineEnd>
            </BlockWrapper>
          </Line>
          <Line>
            <BlockWrapper>
              <Line>
                <Text>
                  {hotelData.location.address} <I name="arrows-alt-h" solid />{' '}
                  {hotelData.location.city}
                </Text>
              </Line>
            </BlockWrapper>
          </Line>
        </InfoWrapperWrapper>
        <V>
          <ImagesWrapper horizontal>
            {hotelData.gallery.map(pic => (
              <Image
                source={{uri: pic}}
                width={width - PADDING_PLUS_MARGIN_WIDTH_CORRECTOR_FACTOR}
                key={pic}
              />
            ))}
          </ImagesWrapper>
        </V>
      </InfoWrapper>
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
  justify-content: space-between;
  box-sizing: border-box;
`

const StarsWrapper = styled(V)`
  flex-direction: row;
  justify-content: space-between;
`
const UserRating = styled.Text`
  font-size: 25px;
`
const InfoWrapperWrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
`

const Line = styled(V)`
  flex-direction: row;
  align-items: center;
`
const Text = styled.Text`
  margin-right: 5px;
`

const BlockWrapper = styled(V)`
  flex-direction: row;
  flex: 1;
`

const LineEnd = styled(V)`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`

const Icon = styled(I)`
  font-size: 20px;
`
