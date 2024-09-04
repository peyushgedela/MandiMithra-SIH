import { Text, View } from "react-native";
import React from "react";
import LandingButton from "../components/LandingButton";

const index = () => {
  return (
    <View className="flex flex-col bg-amber-200">
      <View className="basis-3/4 items-center justify-center">
        <Text className="text-4xl font-mlight">Welcome to MandiMitra</Text>
      </View>
      <View className="flex items-center basis-1/4 mt-4">
        <View className="w-3/4">
          <LandingButton
            name="Get Started"
            color="#8B4513"
            onPressDestination="/page1"
          />
        </View>
      </View>
    </View>
  );
};

export default index;
