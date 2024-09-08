import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack, Tabs } from "expo-router";

const UserTypeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={"home"} options={{ headerShown: false }} />
      <Stack.Screen name={"profile"} options={{ headerShown: false }} />
      <Stack.Screen name={"addcrop"} options={{ headerShown: false }} />
      <Stack.Screen name={"bidders"} options={{ headerShown: false }} />
      <Stack.Screen name={"modify-bid-farmer"} options={{ headerShown: false }} />
      <Stack.Screen name={"crop-farmers"} options={{headerShown: false}}/>
      <Stack.Screen name={"modify-bid-buyer"} options={{headerShown: false}}/>
      <Stack.Screen name={"add-bid-buyer"} options={{headerShown: false}}/>
      <Stack.Screen name={"userprofile"} options={{headerShown: false}}/>
    </Stack>
  );
};

export default UserTypeLayout;

const styles = StyleSheet.create({});
