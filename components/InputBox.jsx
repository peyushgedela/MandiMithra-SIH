import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import { useState } from 'react';


const InputBox = ({title,value, placeholder, handleChangeText,otherStyles, ...props}) => {
  const [showPassword,setshowPassword]  = useState(false);
  return (
    <View className="w-full h-16 px-16 bg-slate-400 border-2 border-black-100 rounded-2xl ">
        <TextInput 
            className={`flex-1 text-black-100 font-mregular text-base ${otherStyles}`}
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#676767"
            onChangeText={handleChangeText}
            secureTextEntry={title==='Pasword' && !showPassword}
        />

        {title==='Pasword' && 
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                {!showPassword ? 'show' : 'hide'}
            </TouchableOpacity>
        }
    </View>
  )
}

export default InputBox