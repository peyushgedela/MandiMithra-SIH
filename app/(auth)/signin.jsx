import { ScrollView, StyleSheet, Text, TouchableOpacity, Alert, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton"; // Import LandingButton component
import Icon from "react-native-vector-icons/FontAwesome";
import { Query } from "appwrite";
import { databases,COLLECTION_ID,DATABASE_ID,setUserID } from "../appwrite";
import AsyncStorage from "@react-native-async-storage/async-storage";


const signin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (value) => setPhoneNumber(value);
  const handlePasswordChange = (value) => setPassword(value);

  const handleLogin = async (phoneNumber, password) => {
    try {
        // Log before making the query
        console.log('Attempting to query the database...');
        // Check if phoneNumber and password are provided
        if (!phoneNumber || !password) {
          Alert.alert('Error', 'Please enter both phone number and password.');
          return;
      }
        // Query the database for a user with the matching phone number and password
        const result = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal('phonenumber', phoneNumber),
                Query.equal('password', password)
            ]
        );

        // Log the raw result object
        console.log('Query Result:', result);

        // Check if a document is found
        if (result.documents && result.documents.length > 0) {
            // Successfully found the user
            const user = result.documents[0];

            // Store the user session or identifier in AsyncStorage
            await AsyncStorage.setItem('userSession', JSON.stringify(user));
            await setUserID(user.userid); // Persist the userId in AsyncStorage

            // Redirect to home page
            router.replace("/home");
            Alert.alert('Success', 'Successfully logged in!');
            console.log('User logged in successfully.');
        } else {
            // No matching document found, prompt to create an account
            Alert.alert('Error', 'User not found. Please register a new account.');
            console.log('No user found with matching phone number and password.');
            router.replace("/signup");
        }
    } catch (error) {
        // Log and display error
        console.log('Error querying the database:', error);
        Alert.alert('Error', error.message);
    }
};

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
              onPress={async () => {
                await handleLogin(phoneNumber,password)
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
