import React from 'react';
import { TouchableOpacity,Text,View } from 'react-native';
import InputBox from './InputBox';
import { FaUser } from "react-icons/fa";

const CustomButton = (title,handPress, containerStyles, textStyles, isLoading) => {
    return (
      <TouchableOpacity
        onPress={handPress} activeOpacity={0.7} 
        className={`bg-[#D49A42] rounded-xl min-h-[62px] justify-centre items-center ${containerStyles} ${isLoading ? 'opactity-50' : '' }`}
        disabled = {isLoading}
        >
        <Text className={`text-white  font-mregular text-lg ${textStyles}`}>{title}</Text>

        <InputBox
          icon = {<FaUser />}
          >
        </InputBox>

      </TouchableOpacity>
    );
  };
  
  export default CustomButton;


  /*
<CustomButton containerStyles='w-full mt-7' title = 'Custimize the button' hanlePress = {()=>{} /} 

  */