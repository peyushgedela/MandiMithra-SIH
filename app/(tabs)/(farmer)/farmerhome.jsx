import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const farmerhome = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Header</Text>
      <Link href={"/home"}>BuyerHome</Link>
      <Link href={"/farmerhome"}>FarmerHome</Link>
      <Text>Footer</Text>
    </View>
  );
};

export default farmerhome;

const styles = StyleSheet.create({});
