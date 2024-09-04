import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icon set

const signin = () => {
  const [form, setForm] = useState({
    phoneNumber: "",
    password: "",
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-3xl font-mbold">Welcome Back!</Text>

          <SafeAreaView>
            <AuthInputs
              onChangeText={handlePhoneChange}
              className="text-2xl"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              icon={<Icon name="phone" size={20} color="#000" />} // Use FontAwesome phone icon
              title="phone"
            />

            <AuthInputs
              onChangeText={handlePasswordChange}
              className="text-2xl"
              placeholder="Password"
              keyboardType="default"
              value={password}
              icon={<Icon name="lock" size={20} color="#000" />} // Use FontAwesome lock icon
              title="password"
            />
          </SafeAreaView>

          <View className="font-mregular">
            <Text>Don't have account</Text>
            <Link href="/signup" className="text-orange-400">
              SignUp
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;
