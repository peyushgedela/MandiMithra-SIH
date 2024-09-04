import { TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const AuthInputs = ({
  onChangeText,
  customStyles,
  placeholder,
  keyboardType,
  value,
  icon,
  title,
}) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View className={`flex-row items-center w-full bg-[#f3f3f3] border border-[#a8a8a9] h-14 rounded-md ${customStyles}`}>
      <View className="pl-2">{icon}</View>
      <TextInput
        className="flex-1 pl-2 text-base text-gray-700"
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={title === "password" && !isVisible}
      />
      {title === "password" && (
        <TouchableOpacity
          className="pr-2"
          onPress={() => setVisible(!isVisible)}
        >
          {isVisible ? (
            <Icon name="eye-slash" size={20} color="#000" />
          ) : (
            <Icon name="eye" size={20} color="#000" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthInputs;
