import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export class Page2 extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className="flex flex-row justify-between m-5">
          <Text>2/3</Text>
          <Link className="text-blue-600" href={"/signin"}></Link>
        </View>

        <View>
          <Text className="text-4xl font-mbold">Buy Crop</Text>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>

        <View>
          <Link className="text-blue-600" href={"/page1"}>
            Prev
          </Link>
          <Link className="text-blue-600" href={"/page3"}>
            Next
          </Link>
        </View>
      </SafeAreaView>
    );
  }
}

export default Page2;
