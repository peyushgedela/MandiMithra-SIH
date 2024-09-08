import React, { useState, useEffect } from "react";
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

const handleSubmit = () => {
  console.log("Pandaga Chesko Rohith!!");
};

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
