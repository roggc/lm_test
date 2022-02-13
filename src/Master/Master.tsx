import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import {ListRenderItem, FlatList} from 'react-native'
import {CardInfo} from '../CardInfo'
import {IHotelData, RootStackProps} from '../../App'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import DropDownPicker, {ValueType} from 'react-native-dropdown-picker'

type ScreenProps = NativeStackScreenProps<RootStackProps, 'Hotels'>

const URL_TO_FETCH =
  'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507'

export const Master = ({navigation}: ScreenProps) => {
  const [data, setData] = useState<IHotelData[]>([])
  const [sortDataValues, setSortDataValues] = useState([
    {label: 'Price', value: 'price'},
    {label: 'User Rating', value: 'userRating'},
    {label: 'Stars', value: 'stars'},
  ])
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<ValueType | null>(null)

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
      <DropDownPickerWrapper>
        <DropDownPicker
          items={sortDataValues}
          setItems={setSortDataValues}
          open={open}
          value={value}
          setOpen={setOpen}
          setValue={setValue}
          onSelectItem={item =>
            data.sort((a, b) => b[item.value + ''] - a[item.value + ''])
          }
        />
      </DropDownPickerWrapper>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}

const View = styled.View``
const TouchableOpacity = styled.TouchableOpacity``
const DropDownPickerWrapper = styled.View`
  padding: 0 10px;
  margin-top: 5px;
  z-index: 10;
  flex-direction: row;
`
