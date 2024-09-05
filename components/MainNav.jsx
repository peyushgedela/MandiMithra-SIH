import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const MainNav = (e) => {
  const { name } = e;
  var colbuy = "";
  var colfar = "";
  var coltbuy = "";
  var coltfar = "";
  if (name == "farmer") {
    colbuy = "#EE4B2B";
    colfar = "#4CBB17";
    coltbuy = "#000000";
    coltfar = "#FFFFFF";
  } else if (name == "buyer") {
    colfar = "#EE4B2B";
    colbuy = "#4CBB17";
    coltfar = "#000000";
    coltbuy = "#FFFFFF";
  }
  return (
    <View className="flex flex-row px-4 justify-evenly">
      <View className="basis-1/3">
        <TouchableOpacity
          className="flex items-center justify-center"
          style={[styles.button, { backgroundColor: colbuy }]}
          onPress={() => {
            if (name == "farmer") {
              router.replace("/home");
            }
          }} // Dynamic routing
        >
          <Text className="font-mbold text-base" style={{ color: coltbuy }}>
            Buyer
          </Text>
        </TouchableOpacity>
      </View>
      <View className="basis-1/3">
        <TouchableOpacity
          className="flex items-center justify-center"
          style={[styles.button, { backgroundColor: colfar }]}
          onPress={() => {
            if (name == "buyer") router.replace("/farmerhome");
          }} // Dynamic routing
        >
          <Text className="font-mbold text-base" style={{ color: coltfar }}>
            Farmer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainNav;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 15,
  },
});
