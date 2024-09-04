import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import LandingButton from "../../components/LandingButton";

export class Page3 extends Component {
  render() {
    return (
      <SafeAreaView className="flex flex-col">
        <View className="basis-1/12 flex flex-row justify-between m-5">
          <Text className="font-mbold">3/3</Text>
        </View>
        <View className="basis-8/12 flex flex-col items-center">
          <View className="basis-2/5 flex mt-12 items-center justify-center">
            <Text className="text-4xl font-mbold">Bid your price</Text>
          </View>
          <View className="basis-3/5 w-11/12">
            <Text className="font-mlight">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Text>
          </View>
        </View>
        <View className="basis-1/12 flex items-center">
          <View className="w-3/4 flex flex-row justify-between">
            <View className="w-1/3">
              <LandingButton
                name="Previous"
                color="#8B4"
                onPressDestination="/page2"
              />
            </View>
            <View className="w-1/3">
              <LandingButton
                name="Let's Go!"
                color="#8B4513"
                onPressDestination="/signin"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Page3;
