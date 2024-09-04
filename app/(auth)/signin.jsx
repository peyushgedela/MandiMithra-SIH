import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const signin = () => {
  const [form, setForm] = useState({
    phoneNumber: "",
    password: "",
  });

  const [isVisible, setVisible] = useState(true);

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-3xl font-mbold">Welcome Back!</Text>

          <SafeAreaView>
            <TextInput
              onChangeText={(e) => {
                setForm({ ...form, phoneNumber: e });
              }}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
          </SafeAreaView>

          <SafeAreaView>
            <TextInput
              secureTextEntry={isVisible}
              onChangeText={(e) => {
                setForm({ ...form, password: e });
              }}
              placeholder="Password"
            />
            <Text
              onPress={() => {
                setVisible(!isVisible);
              }}
            >
              {isVisible ? "Show Pass" : "Hide Pass"}
            </Text>
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

const styles = StyleSheet.create({});
