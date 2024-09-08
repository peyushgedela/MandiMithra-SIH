import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropdownInput from "../../components/DropdownInput";
import Header from "../../components/Header";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import { databases,FARMERS_COLLECTON_ID,DATABASE_ID,getUserID } from "../appwrite";
import { ID } from "appwrite";
import { router } from "expo-router";

const catData = [
  { label: "vegetables" },
  { label: "grains" },
  { label: "fruits" },
];

const nameData = {
  vegetables: [
    { label: "cabbage" },
    { label: "cauliflower" },
    { label: "coffee" },
    { label: "ladyfinger" },
    { label: "onion" },
    { label: "potato" },
    { label: "tea" },
  ],
  grains: [
    { label: "sugarcane" },
    { label: "maize" },
    { label: "rice" },
    { label: "wheat" },
  ],
  fruits: [
    { label: "apple" },
    { label: "capsicum" },
    { label: "green-pepper" },
    { label: "guava" },
    { label: "orange" },
    { label: "pineapple" },
    { label: "red-pepper" },
    { label: "watermelon" },
  ],
};

const gradeData = [
  { label: "Grade A" },
  { label: "Grade B" },
  { label: "Grade C" },
  { label: "Grade D" },
  { label: "Grade E" },
];


const AddCrop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [availableNames, setAvailableNames] = useState([]);
  const [variety, setVariety] = useState("");
  const [quantity, setQuantity] = useState("");
  const [minBid, setMinBid] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [userId,setUserId] = useState(null)

  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getUserID();
      setUserId(id) 
    };
    fetchUserId();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleCategoryChange = (label) => {
    setSelectedCategory(label);
    setSelectedName("");
  };

  const handleSubmit = () => {
    // Check if the necessary values exist
    if (!selectedCategory) {
      Alert.alert("Error", "Please select a crop category.");
      return;
    }
    if (!selectedName) {
      Alert.alert("Error", "Please select a crop name.");
      return;
    }
    if (!variety) {
      Alert.alert("Error", "Please enter the crop variety.");
      return;
    }
    if (!quantity) {
      Alert.alert("Error", "Please enter the crop quantity.");
      return;
    }
    if (!date) {
      Alert.alert("Error", "Please select a harvest date.");
      return;
    }
    if (!minBid) {
      Alert.alert("Error", "Please enter a minimum bid value.");
      return;
    }
    if (!selectedGrade) {
      Alert.alert("Error", "Please select the crop quality.");
      return;
    }
  
    // If all validations pass, store the crop data
    console.log("All values are valid, proceeding to store crop details.");
    storeFarmerCrops();
  };

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
  };

  const storeFarmerCrops = async () => {
    try {
        // Define the data object with user attributes
        const cropData = {
            userid: userId,
            category: selectedCategory,
            crop_name: selectedName,
            crop_variety: variety,
            crop_quantity:quantity,
            harvest_date:formatDate(date),
            min_bid_value:minBid,
            crop_quality:selectedGrade
        };
  
        // Store the user details in the database
        await databases.createDocument(
            DATABASE_ID,    // Your database ID
            FARMERS_COLLECTON_ID,    // Your collection ID
            ID.unique(),             // Unique ID for the document
            cropData,                  // The user data object
        );
  
        console.log('crop details stored successfully!');
        Alert.alert("Success", "Crop details stored successfully.");
        router.replace('/home');
    } catch (error) {
        console.log('Error storing user details:', error.message);
        Alert.alert("Error", "Failed to store crop details. Please try again.");
      }
  }

  useEffect(() => {
    if (selectedCategory) {
      setAvailableNames(nameData[selectedCategory] || []);
    } else {
      setAvailableNames([]);
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView className="flex flex-1 flex-col" style={styles.container}>
      <Header className="basis-1/12" />
      <View className="justify-center items-center basis-1/12">
        <Text className="font-mblack text-xl">Add your Crop</Text>
      </View>
      <ScrollView className="flex flex-col p-3">
        <View style={styles.input}>
          <DropdownInput
            data={catData}
            label="Select Category"
            iconName="sitemap"
            placeholder="Select Category"
            onValueChange={handleCategoryChange}
          />
        </View>
        <View style={styles.input}>
          <DropdownInput
            data={availableNames}
            style={styles.input}
            label="Select Name of Crop"
            iconName="leaf"
            placeholder="Select Name of Crop"
            onValueChange={(label) => setSelectedName(label)}
          />
        </View>
        <View style={styles.input}>
          <View
            className="flex flex-row items-center"
            style={styles.innerinput}
          >
            <View className="px-1 pr-2">
              <Icon name="tag" size={20} color="black" style={styles.icon} />
            </View>
            <TextInput
              onChangeText={setVariety}
              value={variety}
              placeholder="Explain Crop Variety"
              keyboardType="default"
            />
          </View>
        </View>
        <View style={styles.input}>
          <View
            className="flex flex-row items-center"
            style={styles.innerinput}
          >
            <View className="px-1 pr-2">
              <Icon name="cube" size={20} color="black" style={styles.icon} />
            </View>
            <TextInput
              onChangeText={setQuantity}
              value={quantity}
              placeholder="Enter Quantity of Produce (in tonnes)"
              keyboardType="decimal-pad"
            />
          </View>
        </View>
        <View style={styles.input}>
          <TouchableOpacity
            style={[
              styles.innerinput,
              { alignItems: "center", justifyContent: "center" },
            ]}
            onPress={showDatepicker}
          >
            <Text className="font-mlight">Expected Harvest Date</Text>
          </TouchableOpacity>
          <Text className="font-mlight text-sm">
            Selected: {date.toLocaleDateString()}
          </Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={false}
              onChange={onChange}
            />
          )}
        </View>
        <View style={styles.input}>
          <View
            className="flex flex-row items-center"
            style={styles.innerinput}
          >
            <View className="px-1 pr-2">
              <Icon name="rupee" size={20} color="black" style={styles.icon} />
            </View>
            <TextInput
              onChangeText={setMinBid}
              value={minBid}
              placeholder="Expected Minimum Bid Value"
              keyboardType="number-pad"
            />
          </View>
        </View>
        <View style={styles.input}>
          <DropdownInput
            data={gradeData}
            style={styles.input}
            label="Select Grade"
            iconName="star"
            placeholder="Select Crop Quality"
            onValueChange={(label) => setSelectedGrade(label)}
          />
        </View>
        <View>
          <TouchableOpacity
            className="bg-[#548860] p-3 justify-center items-center rounded-xl"
            onPress={handleSubmit}
          >
            <Text className="font-mbold text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddCrop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DEEAE1",
    padding: 16,
  },
  input: {
    marginBottom: 25,
  },
  innerinput: {
    backgroundColor: "#e7e5e4",
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    padding: 8,
  },
});
