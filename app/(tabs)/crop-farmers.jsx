import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ViewFarmers = () => {
  const { name } = useLocalSearchParams();
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-black text-2xl">ViewFarmers</Text>
      <Text className="font-regular text-2xl">{name}</Text>
    </View>
  );
};

export default ViewFarmers;

const styles = StyleSheet.create({});
