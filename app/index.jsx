import { Text, View } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { account } from "./appwrite"; // Import the Appwrite account object
import { router } from "expo-router"; // Import the router for navigation

const Index = () => {
  
  useEffect(() => {
    // Check if the user is logged in
    const checkLoginStatus = async () => {
      try {
        const storedSession = await AsyncStorage.getItem('userSession');
  
        if (storedSession) {
          // User session exists, validate it or use it to keep the user logged in
          console.log('User session found:', JSON.parse(storedSession));
          router.replace('/home'); // Redirect to home
        } else {
          router.replace('/page1'); // Redirect to login if no session is found
        }
      } catch (error) {
        console.log('Error checking login status:', error);
        router.replace('/signin'); // Redirect to login on error
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <View className="flex flex-col bg-amber-200">
      <View className="basis-3/4 items-center justify-center">
        <Text className="text-4xl font-mlight">Welcome to MandiMitra</Text>
      </View>
      <View className="flex items-center basis-1/4 mt-4">
        <View className="w-3/4">
          
        </View>
      </View>
    </View>
  );
};

export default Index;
