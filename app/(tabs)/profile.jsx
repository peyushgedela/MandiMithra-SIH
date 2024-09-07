import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const profile = () => {
  return (
    <SafeAreaView className="flex flex-1 justify-center items-center">
      <TouchableOpacity className="p-3 bg-amber-200 rounded-lg m-4 w-1/2 items-center">
        <Text>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-3 bg-red-700 rounded-lg m-4 w-1/2 items-center"
        onPress={() => {}}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
