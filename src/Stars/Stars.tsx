import React, {useCallback} from 'react'
import styled from 'styled-components/native'
import {ViewProps, View as V} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export interface IStarsProps extends ViewProps {
  numberOfStars: number
  color?: string
}

export const Stars: React.FC<IStarsProps> = ({
  numberOfStars,
  color,
  ...props
}) => {
  const getStars = useCallback(() => {
    const starIcons = []
    for (let i = 1; i <= numberOfStars; i++) {
      starIcons.push(<Icon name="star" solid key={i} color={color} />)
    }
    return starIcons
  }, [numberOfStars, color])
  return <Stars_ {...props}>{getStars()}</Stars_>
}

const Stars_ = styled(V)`
  flex-direction: row;
  align-items: center;
`
