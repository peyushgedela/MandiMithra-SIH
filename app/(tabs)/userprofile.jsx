import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/profileinputfeild";
import DropdownField from "../../components/profileselectfield";
import LandingButton from "../../components/LandingButton";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from '@react-native-community/datetimepicker';

const UserProfile = () => {
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(null);  // Initially set to null
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [village, setVillage] = useState("");
  const [landmark, setLandmark] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [panCard, setPanCard] = useState("");

  const stateOptions = [
    { label: "Select State", value: "" },
    { label: "State 1", value: "state1" },
    { label: "State 2", value: "state2" },
  ];

  const districtOptions = [
    { label: "Select District", value: "" },
    { label: "District 1", value: "district1" },
    { label: "District 2", value: "district2" },
  ];

  const mandalOptions = [
    { label: "Select Mandal", value: "" },
    { label: "Mandal 1", value: "mandal1" },
    { label: "Mandal 2", value: "mandal2" },
  ];

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false); // Close the picker once a date is chosen
    setDob(currentDate);  // Set the selected date only when chosen
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Profile Header */}
        <Text className="text-xl font-mbold text-black mb-2 text-center">Profile</Text>
        <View className="mb-6">
          <View className="flex flex-row items-center justify-center gap-4 my-1">
            <Icon name="user" size={20} color="#000" />
            <Text className="text-lg font-mregular text-black text-center">Full Name of the User</Text>
          </View>
          <View className="flex flex-row items-center justify-center gap-4 my-1">
            <Icon name="phone" size={20} color="#000" />
            <Text className="text-md font-mregular text-[#676767] text-center">+91 XXXXX XXXXX</Text>
          </View>
        </View>

        {/* Personal Details */}
        <Text className="text-lg font-mbold text-black mb-4">Personal Details</Text>

        <InputField
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        {/* Date of Birth */}
        <View>
          <Text className="text-lg font-mbold text-black mb-2">Date of Birth</Text>
          <View className="flex flex-row items-center mb-2">
            <TextInput
              style={{
                borderColor: "#676767",
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                height: 50,
                flex: 1,
              }}
              placeholder="dd/mm/yyyy"
              value={dob ? dob.toLocaleDateString() : ''}  // Show empty if no date selected
              onFocus={() => setShowDatePicker(true)}  // Show picker when input is focused
            />
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={dob || new Date()}  // Default to current date if dob is null
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        {/* Address Details */}
        <Text className="text-lg font-mbold text-black my-4">Address Details</Text>

        <DropdownField
          label="State"
          placeholder="Select State"
        />

        <DropdownField
          label="District"
          placeholder="Select District"
        />

        <DropdownField
          label="Mandal"
          placeholder="Select Mandal"
        />

        <InputField
          label="Village/City"
          placeholder="Enter village"
          value={village}
          onChangeText={setVillage}
        />

        <InputField
          label="Land Mark"
          placeholder="Enter Land Mark"
          value={landmark}
          onChangeText={setLandmark}
        />

        {/* Bank Account Details */}
        <Text className="text-lg font-mbold text-black my-4">Bank Account Details</Text>

        <InputField
          label="Bank Account Number"
          placeholder="Enter Bank Account Number"
          value={accountNumber}
          onChangeText={setAccountNumber}
        />

        <InputField
          label="Account Holder’s Name"
          placeholder="Holder’s Name"
          value={accountHolderName}
          onChangeText={setAccountHolderName}
        />

        <InputField
          label="IFSC Code"
          placeholder="Enter IFSC Code"
          value={ifscCode}
          onChangeText={setIfscCode}
        />

        <InputField
          label="PAN Card"
          placeholder="Enter PAN Card"
          value={panCard}
          onChangeText={setPanCard}
        />

        {/* Save Button */}
        <View className="mt-6 mb-10">
          <LandingButton
            name="Save"
            color="#D49A42"
            onPressDestination="/"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
