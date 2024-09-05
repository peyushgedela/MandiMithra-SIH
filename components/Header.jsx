import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center">
      <View className="basis-1/6">
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View className="basis-2/4">
        <MaskedView
          style={{ flex: 1 }}
          maskElement={
            <Text className="text-xl font-mblack mt-8">MandiMithra</Text>
          }
        >
          <LinearGradient
            colors={["#D49A42", "#88C431"]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0.33 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
      </View>
      <View className="basis-1/6">
        <TouchableHighlight
          onPress={() => {
            router.push("/profile");
          }}
        >
          <Icon name="settings-sharp" size={30} color="#676767" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
