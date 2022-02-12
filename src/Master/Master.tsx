import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {ListRenderItem, FlatList} from 'react-native'
import {CardInfo} from '../CardInfo'

const URL_TO_FETCH =
  'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507'

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

export const Master = () => {
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
    return <CardInfo hotelData={item} />
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
      {/* {data.map(hotelData => (
        <CardInfo hotelData={hotelData} key={hotelData.id} />
      ))} */}
    </View>
  )
}

const View = styled.View``
