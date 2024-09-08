import { ScrollView, Text, TouchableOpacity, View ,StyleSheet, Alert} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link,router } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton";
import Icon from "react-native-vector-icons/FontAwesome";
import { databases,account,COLLECTION_ID,DATABASE_ID } from "../appwrite";
import { Query } from "appwrite";
import { ID } from "react-native-appwrite";

const forget_page_1 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (value) => setPhoneNumber(value);
  
  const handlePhoneNumber = async () => {
    try {
      // Log before making the query
      console.log('Attempting to query the database...');

      // Query the database for a user with the matching phone number and password
      const result = await databases.listDocuments(
          DATABASE_ID,  // Your database ID
          COLLECTION_ID,  // Your collection ID
          [
              // Search for a document where phoneNumber match the input
              Query.equal('phonenumber', phoneNumber),
          ]
      );

      // Log the raw result object
      console.log('Query Result:', result);

      // Check if a document is found
      if (result.documents && result.documents.length > 0) {
          // Successfully found the user
          initiateOTP();
          console.log('valid phone number');
      } else {
          console.log('No user found with matching phone number');
      }
    } catch (error) {
      // Log and display error
      console.log('Error querying the database:', error);
      Alert.alert('Error', error.message);
    }
  }
  
  const initiateOTP = async () =>{
    try {
      const token = await account.createPhoneToken(ID.unique(), "+91" + phoneNumber);
      console.log('Token sent to:', phoneNumber);
      router.replace('/forget_otp')
      Alert.alert('OTP Sent!', 'Please check your SMS for the OTP.');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[55vh] px-4 mt-6 mb-10">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">Forget {"\n"}Password?</Text>
          </View>

          <View className="space-y-4">
            <AuthInputs
              onChangeText={handlePhoneChange}
              placeholder="Phone Number"
              customStyles= "my-4 "
              keyboardType="phone-pad"
              value={phoneNumber}
              icon={<Icon name="user" size={20} color="#000" />}
              title="phone"
            />
          </View>

          <View className="flex mt-2 mb-2">
            <Text className="text-[#676767] text-xs font-mregular mt-3"> We will send you a message to set or reset your new password.</Text>
          </View>

          <View className="mt-3">
            <TouchableOpacity
              className="flex p-4 items-center justify-center bg-[#D49A42]"
              style={styles.button}
              onPress={async () => {
                handlePhoneNumber()
              }}
            >
              <Text className="font-mregular text-xs text-white">Request OTP</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 15,
  },
});

export default forget_page_1