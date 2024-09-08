import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { account } from "../appwrite";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profile = () => {

  const handleLogout = async () => {
    try {
        // Clear session data from AsyncStorage
        await AsyncStorage.removeItem('userSession');
        // Redirect to SignIn or login page after logout
        router.replace('/signin');
        Alert.alert('Success', 'Logged out successfully.');
    } catch (error) {
        // Handle specific errors
        if (error.message.includes('missing scope') || error.message.includes('Session not found')) {
            console.log('User is already logged out or session does not exist.');
        } else {
            console.error('Logout failed:', error);
            Alert.alert('Error', 'Logout failed. Please try again.');
        }
        // Redirect to SignIn or login page after logout failure
        router.replace('/signin');
    }
};


  return (
    <SafeAreaView className="flex flex-1 justify-center items-center">
      <TouchableOpacity className="p-3 bg-amber-200 rounded-lg m-4 w-1/2 items-center">
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
