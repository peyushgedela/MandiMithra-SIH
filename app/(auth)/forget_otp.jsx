import { ScrollView, Text, View, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import LandingButton from "../../components/LandingButton";

const forget_otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "",""]);
  const inputs = useRef([]);

  const handleOtpChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;

    // Move to the next input if a digit is entered
    if (value.length === 1 && index < 5) {
      inputs.current[index + 1].focus();
    }

    // Update the OTP state
    setOtp(otpCopy);
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        // If the current input is empty, move to the previous input
        inputs.current[index - 1].focus();
      } else {
        // Clear current input when backspace is pressed
        const otpCopy = [...otp];
        otpCopy[index] = ""; // Clear the current input
        setOtp(otpCopy);

        // If it's the first deletion, move to the previous input
        if (index > 0) {
          inputs.current[index - 1].focus();
        }
      }
    }
  };

  const handleFocus = (index) => {
    // Only auto-focus if the clicked field is empty
    if (otp[index] === "") {
      const firstEmptyIndex = otp.findIndex((value) => value === "");
      if (firstEmptyIndex !== -1) {
        inputs.current[firstEmptyIndex].focus();
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 mt-6 mb-10">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">
              Enter OTP to{"\n"}Change {"\n"}Password
            </Text>
          </View>

          {/* OTP Field */}
          <View className="flex-row justify-around space-x-2">
            {otp.map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                value={otp[index]}
                onChangeText={(value) => handleOtpChange(value, index)}
                maxLength={1}
                keyboardType="numeric"
                className="border-b-2 border-gray-800 w-12 h-12 text-center text-2xl"
                onKeyPress={(event) => handleKeyPress(event, index)}
                onFocus={() => handleFocus(index)}
              />
            ))}
          </View>

          <View className="flex mt-2 mb-2">
            <Text className="text-gray-600 font-mregular mt-3 mb-5">
              Didn't recieve OTP?{" "}
            </Text>
            <Link href="/" className="text-[#D49A42] ml-1">
              <Text className="font-mregular">Resend OTP</Text>
            </Link>
          </View>

          <View className="mt-6">
            <LandingButton
              name="Submit OTP"
              color="#D49A42"
              onPressDestination="/changePassword"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default forget_otp;
