import React from "react";
import { TextInput, View, Text } from "react-native";

const profileinputfeild = ({ label, placeholder, value, onChangeText }) => {
  return (
    <View className="mb-4">
      <Text className="text-sm font-mregular text-black mb-1">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="border border-[#676767] rounded-md p-3 text-black font-mregular"
      />
    </View>
  );
};

export default profileinputfeild;