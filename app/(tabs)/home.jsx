import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Header</Text>
      <Text>Buyer-Home</Text>
      <Link href={"/farmerhome"}>FarmerHome</Link>
      <Text>Footer</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
