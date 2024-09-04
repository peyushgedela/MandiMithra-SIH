import { View, Text } from 'react-native'
import React from 'react'

const OpenpageButton = (
    title,
    handPress, 
    containerStyles) => {
  return (
    <TouchableOpacity
      onPress={handPress}
      style={containerStyles}
      >
        {title}
      </TouchableOpacity>
  )
}

export default OpenpageButton