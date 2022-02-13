export const getEmoticon = (userRating: number) => {
  if (userRating >= 9.0) return '🤩'
  if (userRating >= 7.0) return '😃'
  if (userRating >= 6.0) return '🙂'
  if (userRating >= 5.0) return '😐'
  if (userRating >= 4.0) return '🙁'
  if (userRating >= 2.0) return '😢'
  return '😭'
}
