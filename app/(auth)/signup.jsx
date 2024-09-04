import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputBox from "../../components/InputBox";
import CustomButton from "../../components/CustomButton";

const signin = () => {
  const [form,setForm] = useState(
    {
      name:"",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
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
            title="name"
            value={form.name}
            handleChangeText={(e) => setFormValue({...form,name : e})}
            otherStyles={"mt-7"}
          ></InputBox>

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

          <InputBox
            title="Password"
            value={form.confirmPassword}
            handleChangeText={(e) => setFormValue({...form,confirmPassword : e})}
            otherStyles={"mt-7"}
          />

          <Text>By clicking on submit button you accept the terms and conditions</Text>

          <CustomButton
            title="Sign-In"
            handlePress = {submit}
            containerStyle="mt-7"
            isLoading = {!isSubmitting}
          />

          <View className="font-mregular">
            <Text>Have a accountAlready?</Text>
            <Link href="/signin" className="text-orange-400">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signin;

const styles = StyleSheet.create({});
