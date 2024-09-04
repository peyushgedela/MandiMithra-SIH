import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import CustomButton from "../../components/CustomButton";

const signin = () => {
  const [form,setForm] = useState(
    {

      phoneNumber: "",
      password: "",
    }
  )

  const[isSubmitting,setisSubmitting] = useState(false);

  const submit=() => {

  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="text-3xl font-mbold">Welcome Back!</Text>

          <InputBox
            title="phoneNumber"
            value={form.phoneNumber}
            handleChangeText={(e) => setFormValue({...form,phoneNumber : e})}
            otherStyles={"mt-7"}
            keyboardType="phone-pad"
          ></InputBox>

          <InputBox
            title="Password"
            value={form.password}
            handleChangeText={(e) => setFormValue({...form,password : e})}
            otherStyles={"mt-7"}
          />

          <CustomButton
            title="Sign-In"
            handlePress = {submit}
            containerStyle="mt-7"
            isLoading = {!isSubmitting}
          />

          <View className="font-mregular">
            <Text>Don't have account</Text>
            <Link href="/singup" className="text-orange-400">SignUp</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;

const styles = StyleSheet.create({});
