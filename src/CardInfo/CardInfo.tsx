import React from 'react'
import styled from 'styled-components/native'
import {ViewProps, View} from 'react-native'
import {IHotelData} from '../../App'
import Icon from 'react-native-vector-icons/FontAwesome5'

export interface ICardInfoProps extends ViewProps {
  hotelData: IHotelData
}

export const CardInfo: React.FC<ICardInfoProps> = ({hotelData, ...props}) => {
  const getStars = () => {
    const starIcons = []
    for (let i = 1; i <= hotelData.stars; i++) {
      starIcons.push(<Icon name="star" solid key={i} />)
    }
    return starIcons
  }
  return (
    <Wrapper {...props}>
      <TitleView>
        <Text>{hotelData.name}</Text>
        <Stars>{getStars()}</Stars>
        <Text>{hotelData.userRating}</Text>
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
  justify-content: space-between;
`

const Wrapper = styled(View)`
  padding: ${({theme}) => theme.dimensions.padding.simple}px;
  margin: ${({theme}) => theme.dimensions.margin.simple}px;
  border-radius: ${({theme}) => theme.dimensions.radius}px;
  border: 1px solid ${({theme}) => theme.colors.black};
`

const Stars = styled(View)`
  flex-direction: row;
  align-items: center;
`
