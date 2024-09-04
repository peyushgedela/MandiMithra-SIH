import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import LandingButton from "../../components/LandingButton";

export class Page2 extends Component {
  render() {
    return (
      <SafeAreaView className="flex flex-col">
        <View className="basis-1/12 flex flex-row justify-between m-5">
          <Text className="font-mbold">2/3</Text>
          <Link className="font-mbold text-amber-700" href={"/signin"}>
            Skip
          </Link>
        </View>
        <View className="basis-8/12 flex flex-col items-center w-11/12">
          <View className="basis-2/5 flex items-end">
            <Text className="text-4xl font-mbold">Buy Crop</Text>
          </View>
          <Text className="basis-3/5 font-mlight">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>
        <View className="basis-1/12 flex items-center">
          <View className="w-3/4 flex flex-row justify-between">
            <LandingButton
              name="Previous"
              color="#8B4"
              onPressDestination="/page1"
            />
            <LandingButton
              name="Next"
              color="#8B4513"
              onPressDestination="/page3"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Page2;
