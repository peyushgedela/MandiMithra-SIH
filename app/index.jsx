import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { account } from "./appwrite"; // Import the Appwrite account object
import { router } from "expo-router"; // Import the router for navigation

const Index = () => {
  
  useEffect(() => {
    // Check if the user is logged in
    const checkLoginStatus = async () => {
      try {
        const user = await account.get(); // Fetch current user session
        if (user) {
          router.replace("/home"); // Navigate to HomePage if logged in
        }
      } catch (error) {
        router.replace("/page1"); // Navigate to Get Started page if not logged in
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
