import { View, Text } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="page1" options={{ headerShown: false }} />
      <Stack.Screen name="page2" options={{ headerShown: false }} />
      <Stack.Screen name="page3" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
