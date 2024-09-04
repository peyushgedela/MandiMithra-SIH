import { Text, View } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export class Page3 extends Component {
  render() {
    return (
      <SafeAreaView>
        <View className="flex flex-row justify-between m-5">
          <Text>3/3</Text>
        </View>

        <View>
          <Text className="text-4xl font-mbold">Bid the Price</Text>
          <Text>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Text>
        </View>

        <View>
          <Link className="text-blue-600" href={"/page2"}>
            Prev
          </Link>
          <Link className="text-blue-600" href={"/signin"}>
            Let's Go
          </Link>
        </View>
      </SafeAreaView>
    );
  }
}

export default Page3;
