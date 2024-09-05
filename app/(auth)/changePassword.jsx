import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton"; 
import Icon from "react-native-vector-icons/FontAwesome";

const changePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const handlePasswordChange = (value) => setPassword(value);
    const handleConfirmPasswordChange = (value) => setconfirmPassword(value);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">Change{"\n"}Password</Text>
          </View>

          <View className="space-y-4">
            <AuthInputs
            onChangeText={handlePasswordChange}
            placeholder="Password"
            customStyles= "my-3"
            keyboardType="default"
            value={password}
            icon={<Icon name="lock" size={20} color="#000" />}
            title="password"
            />

            <AuthInputs
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            customStyles= "my-3"
            keyboardType="default"
            value={confirmPassword}
            icon={<Icon name="lock" size={20} color="#000" />}
            title="password"
            />
          </View>

          <View className="flex mt-2 mb-2">
            <Text className="text-[#676767] text-xs font-mregular mt-3">By clicking the{" "} <Text>Change Password</Text>{" "}password will be updated</Text>
          </View>

          <View className="mt-6">
            <LandingButton
              name="Create Password"
              color="#D49A42" 
              onPressDestination="/signin" 
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default changePassword;
