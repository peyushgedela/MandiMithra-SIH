import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const signin = () => {
  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-3xl font-mbold">Welcome Back!</Text>

          <Text>
            By clicking on submit button you accept the terms and conditions
          </Text>

          <View className="font-mregular">
            <Text>Have a account Already?</Text>
            <Link href="/signin" className="text-orange-400">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;

const styles = StyleSheet.create({});
