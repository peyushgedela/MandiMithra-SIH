import { View, Text, TextInput } from 'react-native'
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const InputBox = ({title,icon, placeholder, handleChangeText,otherStyles, ...props}) => {
  return (
    <SafeAreaView>
      <View>
        {icon}

        <TextInput 
            
            />
      </View>
    </SafeAreaView>
  )
}

export default InputBox