import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const signup = () => {
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text className="text-3xl font-mbold">signup</Text>
      <Link href={"/"}>Login Here</Link>
      <Text>Hello Guys!!!</Text>
    </View>
  );
};

export default signup;
