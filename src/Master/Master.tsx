import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {ListRenderItem, FlatList} from 'react-native'
import {CardInfo} from '../CardInfo'
import {IHotelData, RootStackProps} from '../../App'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'

type ScreenProps = NativeStackScreenProps<RootStackProps, 'Hotels'>

const URL_TO_FETCH =
  'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507'

export const Master = ({navigation}: ScreenProps) => {
  const [data, setData] = useState<IHotelData[]>([])

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const resp = await fetch(URL_TO_FETCH)
        const data_ = await resp.json()
        setData(data_)
      } catch (e) {
        console.log('unable to fetch')
      }
    }
    fetchAsync()
  }, [])

  const renderItem: ListRenderItem<IHotelData> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('HotelDetails', {hotelData: item})}>
        <CardInfo hotelData={item} />
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

const View = styled.View``
const TouchableOpacity = styled.TouchableOpacity``
