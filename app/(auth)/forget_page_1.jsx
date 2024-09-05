import { ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton";
import Icon from "react-native-vector-icons/FontAwesome";
const forget_page_1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (value) => setPhoneNumber(value);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[55vh] px-4 mt-6 mb-10">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">Forget {"\n"}Password?</Text>
          </View>

          <View className="space-y-4">
            <AuthInputs
              onChangeText={handlePhoneChange}
              placeholder="Phone Number"
              customStyles= "my-4 "
              keyboardType="phone-pad"
              value={phoneNumber}
              icon={<Icon name="user" size={20} color="#000" />}
              title="phone"
            />
          </View>

          <View className="flex mt-2 mb-2">
            <Text className="text-[#676767] text-xs font-mregular mt-3"> We will send you a message to set or reset your new password.</Text>
          </View>

          <View className="mt-6">
            <LandingButton
              name="Request OTP"
              color="#D49A42" 
              onPressDestination="/forget_otp" 
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default forget_page_1