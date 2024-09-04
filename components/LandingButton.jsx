import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const LandingButton = (props) => {
  const { name, color, onPressDestination } = props;
  return (
    <View>
      <TouchableOpacity
        className="flex items-center justify-center font-mbold"
        style={[styles.button, { backgroundColor: color }]} // Apply dynamic color
        onPress={() => {
          router.push(onPressDestination);
        }} // Dynamic routing
      >
        <Text className="" style={styles.text}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 15,
  },
  text: {
    color: "#FFFFFF",
  },
});

export default LandingButton;
