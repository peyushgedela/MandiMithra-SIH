import { TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const AuthInputs = ({
  onChangeText,
  className,
  placeholder,
  keyboardType,
  value,
  icon,
  title,
}) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View className="flex flex-row items-center w-full bg-[#f3f3f3] text-[#676767] border-2 border-[#a8a8a9] h-[55px] rounded-md mx-4">
      <View className="pl-2">{icon}</View>

      <TextInput
        className={`flex-1 ${className} pl-2`}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={title === "password" && !isVisible}
      />

      {title === "password" && (
        <TouchableOpacity
          className="pr-2"
          onPress={() => {
            setVisible(!isVisible);
          }}
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
