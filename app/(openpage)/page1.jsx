import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import LandingButton from "../../components/LandingButton";

export class Page1 extends Component {
  render() {
    return (
      <SafeAreaView className="flex flex-col">
        <View className="basis-1/12 flex flex-row justify-between m-5">
          <Text className="font-mbold">1/3</Text>
          <Link className="font-mbold text-amber-700" href={"/signin"}>
            Skip
          </Link>
        </View>
        <View className="basis-8/12 flex flex-col items-center w-11/12">
          <View className="basis-2/5 flex items-end">
            <Text className="text-4xl font-mbold">Sell Crop</Text>
          </View>
          <Text className="basis-3/5 font-mlight">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>
        <View className="basis-1/12 flex items-center">
          <View className="w-3/4">
            <LandingButton
              name="Next"
              color="#8B4513"
              onPressDestination="/page2"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Page1;
