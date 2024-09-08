import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropdownInput from "../../components/DropdownInput";
import Header from "../../components/Header";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";

const catData = [
  { label: "vegetables", value: "1" },
  { label: "grains", value: "2" },
  { label: "fruits", value: "3" },
];

const nameData = {
  1: [
    { label: "cabbage", value: "1" },
    { label: "cauliflower", value: "2" },
    { label: "coffee", value: "3" },
    { label: "ladyfinger", value: "4" },
    { label: "onion", value: "5" },
    { label: "potato", value: "6" },
    { label: "tea", value: "7" },
  ],
  2: [
    { label: "sugarcane", value: "1" },
    { label: "maize", value: "2" },
    { label: "rice", value: "3" },
    { label: "wheat", value: "4" },
  ],
  3: [
    { label: "apple", value: "1" },
    { label: "capsicum", value: "2" },
    { label: "green-pepper", value: "3" },
    { label: "guava", value: "4" },
    { label: "orange", value: "5" },
    { label: "pineapple", value: "6" },
    { label: "red-pepper", value: "7" },
    { label: "watermelon", value: "8" },
  ],
};

const gradeData = [
  { label: "Grade A", value: "1" },
  { label: "Grade B", value: "2" },
  { label: "Grade C", value: "3" },
  { label: "Grade D", value: "4" },
  { label: "Grade E", value: "5" },
];

const addcrop = () => {
  // states to store the data
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [avlName, setAvlName] = useState([]);
  const [variety, setVariety] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [minBid, setMinBid] = useState(0);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
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

  // Function to handle category change
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  // useEffect to update names when category changes
  useEffect(() => {
    if (selectedCategory) {
      setAvlName(nameData[selectedCategory] || []); // Set avlName to the array of names or empty array
    } else {
      setAvlName([]); // Reset to an empty array when category changes
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
            data={avlName}
            style={styles.input}
            label="Select Name of Crop"
            iconName="leaf"
            placeholder="Select Name of Crop"
            onValueChange={(value) => setSelectedName(value)}
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
              onValueChange={(value) => {
                setVariety(value);
              }}
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
              onValueChange={(value) => {
                setQuantity(value);
              }}
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
          <Text className="font-mlight text-sm">Selected: {date.toLocaleDateString()}</Text>
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
              onChangeText={(value) => {
                setMinBid(value);
              }}
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
            onValueChange={(value) => setSelectedGrade(value)}
          />
        </View>
        <View>
          <TouchableOpacity
            className="bg-[#548860] p-3 justify-center items-center rounded-xl"
            onPress={() => {
              console.log("Enjoy Rohith!!!");
            }}
          >
            <Text className="font-mbold text-white">Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default addcrop;

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
