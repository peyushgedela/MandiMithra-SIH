import { ScrollView, Text, View, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import LandingButton from "../../components/LandingButton";

const create_otp = () => {
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
    const key = event.nativeEvent.key;

    if (key === "Backspace") {
      const otpCopy = [...otp];
      
      if (otp[index] === "" && index > 0) {
        // Move to the previous input if the current one is empty
        inputs.current[index - 1].focus();
        otpCopy[index - 1] = ""; // Clear the previous input
        setOtp(otpCopy);
      } else {
        // Clear current input and remain in the current box
        otpCopy[index] = "";
        setOtp(otpCopy);
      }
    }
  };

  const handleFocus = (index) => {
    // Focus on the first empty field when any box is clicked
    const firstEmptyIndex = otp.findIndex((value) => value === "");
    if (firstEmptyIndex !== -1 && firstEmptyIndex !== index) {
      inputs.current[firstEmptyIndex].focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 mt-6 mb-10">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">
              Enter OTP to{"\n"}Verify Number
            </Text>
          </View>

          {/* OTP Input Fields */}
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
                onFocus={() => handleFocus(index)} // Focus handling logic adjusted
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
              onPressDestination="/signin"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default create_otp;
