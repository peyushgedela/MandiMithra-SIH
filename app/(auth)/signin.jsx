import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton"; // Import LandingButton component
import Icon from "react-native-vector-icons/FontAwesome";

const signin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (value) => setPhoneNumber(value);
  const handlePasswordChange = (value) => setPassword(value);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">
              Welcome{"\n"}Back!
            </Text>
          </View>

          <View className="space-y-4">
            <AuthInputs
              onChangeText={handlePhoneChange}
              placeholder="Phone Number"
              customStyles="my-4 "
              keyboardType="phone-pad"
              value={phoneNumber}
              icon={<Icon name="user" size={20} color="#000" />}
              title="phone"
            />

            <AuthInputs
              onChangeText={handlePasswordChange}
              placeholder="Password"
              customStyles="my-4"
              keyboardType="default"
              value={password}
              icon={<Icon name="lock" size={20} color="#000" />}
              title="password"
            />
          </View>

          <View className="flex items-end mt-2 mb-8">
            <Link href="/forget_page_1" className="text-[#D49A42] ml-1">
              <Text className="font-mregular">Forget Password?</Text>
            </Link>
          </View>

          <View className="mt-3">
            <TouchableOpacity
              className="flex p-4 items-center justify-center bg-[#D49A42]"
              style={styles.button}
              onPress={() => {
                router.replace("/home");
              }}
            >
              <Text className="font-mregular text-xs text-white">Login</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-4">
            <Text className="text-[#676767] text-xs font-mregular">
              Don't have an account?
            </Text>
            <Link href="/signup" className="text-[#D49A42] ml-1">
              <Text className="font-mregular space-y-4">Sign Up</Text>
            </Link>
          </View>
        </View>
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

export default signin;
