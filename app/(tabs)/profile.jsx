import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { account } from "../appwrite";
import { router } from "expo-router";

const profile = () => {

  const handleLogout = async () => {
    try {
      // First, check if the user is logged in before attempting logout
      const user = await account.get();
      
      if (user) {
        // If the user is logged in, proceed to delete the session
        await account.deleteSession("current"); // Log out the current user session
        router.replace("/signin"); // Navigate to SignIn or login page after logout
      }
    } catch (error) {
      // Check if the error is due to the user being already logged out
      if (error.message.includes("missing scope")) {
        console.log("User is already logged out or not logged in.");
        router.replace("/signin"); // Redirect to login page if the user is not logged in
      } else {
        console.error("Logout failed: ", error);
      }
    }
  };

  return (
    <SafeAreaView className="flex flex-1 justify-center items-center">
      <TouchableOpacity 
        className="p-3 bg-amber-200 rounded-lg m-4 w-1/2 items-center" 
        onPress={() => {router.push("/userprofile");}}
      >
        <Text>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="p-3 bg-red-700 rounded-lg m-4 w-1/2 items-center"
        onPress={() => {
          handleLogout()
        }}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
