import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton"; // Import LandingButton component
import Icon from "react-native-vector-icons/FontAwesome";

const signup = () => {
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleFullNameChange = (value) => setfullName(value);
  const handlePhoneChange = (value) => setPhoneNumber(value);
  const handlePasswordChange = (value) => setPassword(value);
  const handleConfirmPasswordChange = (value) => setconfirmPassword(value);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView >
        <View className="w-full justify-center min-h-[55vh] px-4 my-6">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">Create an Account</Text>
          </View>

          <View className="space-y-4">
          <AuthInputs
              onChangeText={handleFullNameChange}
              placeholder="Full Name"
              customStyles= "my-3"
              value={fullName}
              icon={<Icon name="user" size={20} color="#000" />}
              title="phone"
            />

            <AuthInputs
              onChangeText={handlePhoneChange}
              placeholder="Phone Number"
              customStyles= "my-3"
              keyboardType="phone-pad"
              value={phoneNumber}
              icon={<Icon name="phone" size={20} color="#000" />}
              title="phone"
            />

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
            <Text className="text-gray-600 text-xs font-mregular mt-3">By clicking the{" "} <Text>Register</Text>{" "}you agree to the terms and conditions</Text>
          </View>

          <View className="mt-6">
            <LandingButton
              name="Create Account"
              color="#D49A42" 
              onPressDestination="/create_otp" 
            />
          </View>

          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-600 font-mregular">Already have an account?</Text>
            <Link href="/signin" className="text-[#D49A42] ml-1">
              <Text className="font-mregular">Sign In</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signup;
