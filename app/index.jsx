import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-amber-200">
      <Text className="text-4xl font-mlight">Welcome to MandiMitra</Text>
      <Link className="text-blue-600" href={"/page1"}>
        Go to Home
      </Link>
    </View>
  );
};

export default index;
