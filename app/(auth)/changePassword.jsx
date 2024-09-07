import { ScrollView, Text, View,StyleSheet,TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import AuthInputs from "../../components/AuthInputs";
import LandingButton from "../../components/LandingButton"; 
import Icon from "react-native-vector-icons/FontAwesome";
import { databases,getUserID,DATABASE_ID,COLLECTION_ID } from "../appwrite";
import { Query } from "appwrite";


const changePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const userId = getUserID(); 
    const handlePasswordChange = (value) => setPassword(value);
    const handleConfirmPasswordChange = (value) => setconfirmPassword(value);

    const handleChangePassword = async () =>{
      if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
      }
      updatePassword()
    }

    const getDocumentIdByUserId = async (userId) => {
      try {
        // Query the database to find the document that matches the userId
        const result = await databases.listDocuments(
          DATABASE_ID, // Your database ID
          COLLECTION_ID, // Your collection ID
          [
            Query.equal('userid', userId), // Assuming userId is stored in the document
          ]
        );
    
        // Check if the document exists
        if (result.documents && result.documents.length > 0) {
          return result.documents[0].$id; // Return the documentId
        } else {
          throw new Error('User document not found.');
        }
      } catch (error) {
        console.error('Error retrieving documentId:', error);
        throw error;
      }
    };

    const updatePassword = async () =>{
      try {
        // Get the userId from session
        if (!userId) return;
  
        const documentId = await getDocumentIdByUserId(userId);
        const updatedUser = await databases.updateDocument(
          DATABASE_ID,         // Your database ID
          COLLECTION_ID,       // Your collection ID
          documentId,              // User document ID (userId)
          {
            password: password // Update the password field with the new password
          }
        );
  
        Alert.alert("Success", "Password updated successfully");
        router.replace("/signin")
      } catch (error) {
        console.log("Error updating password:", error);
        Alert.alert("Error", "Failed to update password. Please try again.");
      }
    }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="w-full justify-center min-h-[70vh] px-4 my-6">
          <View className="mt-10 mb-6">
            <Text className="text-4xl font-mbold text-black">Change{"\n"}Password</Text>
          </View>

          <View className="space-y-4">
            <AuthInputs
            onChangeText={handlePasswordChange}
            placeholder="Password"
            customStyles= "my-3"
            keyboardType="default"
            value={password}
            icon={<Icon name="lock" size={20} color="#000" />}
            title="password"
            />

            <AuthInputs
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            customStyles= "my-3"
            keyboardType="default"
            value={confirmPassword}
            icon={<Icon name="lock" size={20} color="#000" />}
            title="password"
            />
          </View>

          <View className="flex mt-2 mb-2">
            <Text className="text-[#676767] text-xs font-mregular mt-3">By clicking the{" "} <Text>Change Password</Text>{" "}password will be updated</Text>
          </View>

          <View className="mt-3">
            <TouchableOpacity
              className="flex p-4 items-center justify-center bg-[#D49A42]"
              style={styles.button}
              onPress={async () => {
                handleChangePassword()
              }}
            >
              <Text className="font-mregular text-xs text-white">Create Password</Text>
            </TouchableOpacity>
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

export default changePassword;
