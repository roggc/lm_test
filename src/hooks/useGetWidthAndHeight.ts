import {useRef, useState, useLayoutEffect} from 'react'
import {View} from 'react-native'

export const useGetWidthAndHeight = () => {
  const ref = useRef<View>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.measure((_, __, width_, height_) => {
        setWidth(width_)
        setHeight(height_)
      })
    }
  }, [])
  return {width, height, ref}
}
