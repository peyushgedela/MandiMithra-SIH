import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState,useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton"; // Import LandingButton component
import Icon from "react-native-vector-icons/FontAwesome";
import { ID } from "appwrite";
import { account,databases,COLLECTION_ID,DATABASE_ID } from "../appwrite";


const signup = () => {
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const handleFullNameChange = (value) => setfullName(value);
  const handlePhoneChange = (value) => setPhoneNumber(value);
  const handlePasswordChange = (value) => setPassword(value);
  const handleConfirmPasswordChange = (value) => setconfirmPassword(value);

  const registerUser = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    await initiatePhoneAuth();  // Sends OTP
  };
  
  // Function to send OTP to user's phone number
  const initiatePhoneAuth = async () => {
    try {
      const token = await account.createPhoneToken(ID.unique(), "+91" + phoneNumber);
      console.log('Token sent to:', phoneNumber);
      setUserId(token.userId);
      setIsOtpSent(true)
      Alert.alert('OTP Sent!', 'Please check your SMS for the OTP.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

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

  const confirmUser = async () => {
    try {
        const otpCode = otp.join("");
        const session = await account.createSession(userId, otpCode);
        Alert.alert('Success', 'User authenticated successfully! Redirecting to login screen...');
        // Store user details in the database
        await storeUserDetails();
        router.replace("/signin");

    } catch (error) {
        Alert.alert('Error', error.message);
    }
  };

  const storeUserDetails = async () => {
    try {
        // Define the data object with user attributes
        const userData = {
            userid: userId,
            phonenumber: phoneNumber,
            password: password,
            name: fullName,
        };

        // Store the user details in the database
        await databases.createDocument(
            DATABASE_ID,    // Your database ID
            COLLECTION_ID,    // Your collection ID
            ID.unique(),               // Unique ID for the document
            userData,                  // The user data object
        );

        console.log('User details stored successfully!');
    } catch (error) {
        console.log('Error storing user details:', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {!isOtpSent ? (
          <View className="w-full justify-center min-h-[55vh] px-4 my-6">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">
              Create an Account
            </Text>
          </View>

          <View className="space-y-4">
            <AuthInputs
              onChangeText={handleFullNameChange}
              placeholder="Full Name"
              customStyles="my-3"
              value={fullName}
              icon={<Icon name="user" size={20} color="#000" />}
              title="phone"
            />

            <AuthInputs
              onChangeText={handlePhoneChange}
              placeholder="Phone Number"
              customStyles="my-3"
              keyboardType="phone-pad"
              value={phoneNumber}
              icon={<Icon name="phone" size={20} color="#000" />}
              title="phone"
            />

            <AuthInputs
              onChangeText={handlePasswordChange}
              placeholder="Password"
              customStyles="my-3"
              keyboardType="default"
              value={password}
              icon={<Icon name="lock" size={20} color="#000" />}
              title="password"
            />

            <AuthInputs
              onChangeText={handleConfirmPasswordChange}
              placeholder="Confirm Password"
              customStyles="my-3"
              keyboardType="default"
              value={confirmPassword}
              icon={<Icon name="lock" size={20} color="#000" />}
              title="password"
            />
          </View>

          <View className="flex mt-2 mb-2">
            <Text className="text-gray-600 text-xs font-mregular mt-3">
              By clicking the <Text>Register</Text> you agree to the terms and
              conditions
            </Text>
          </View>

          <View className="mt-6">
            <TouchableOpacity
              className="flex p-4 items-center justify-center bg-[#D49A42]"
              style={styles.button}
              onPress={ () => {
                registerUser()
              }}
            >
              <Text className="font-mregular text-xs text-white">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-600 font-mregular">
              Already have an account?
            </Text>
            <Link href="/signin" className="text-[#D49A42] ml-1">
              <Text className="font-mregular">Sign In</Text>
            </Link>
          </View>
        </View>)
        : (
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
            <TouchableOpacity
              className="flex p-4 items-center justify-center bg-[#D49A42]"
              style={styles.button}
              onPress={() => {
                confirmUser()
              }}
            >
              <Text className="font-mregular text-xs text-white">
                Verify OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 15,
  },
});

export default signup;
