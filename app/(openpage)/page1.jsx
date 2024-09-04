import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

export class Page1 extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className="flex flex-row justify-between m-5">
          <Text>1/3</Text>
          <Link href={"/signin"}>Skip</Link>
        </View>
        <View>
          <Text className="text-4xl font-mbold">Sell Crop</Text>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>

        <View>
          <Link className="text-blue-600" href={"/page2"}>
            Go to Page-2
          </Link>
        </View>
      </SafeAreaView>
    );
  }
}

export default Page1;
