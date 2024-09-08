import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Header from "../../components/Header";

const farmerinfo = {
  crop: "Basmati Rice",
  quantity: "X Ton",
  averageBidValue: "₹85,000",
  estimatedHarvest: "August, 2024",
  organic: true,
  farmer: {
    name: "Person XYZ",
    location: {
      houseNumber: "House No. 12",
      street: "Street 34",
      mandli: "Mandli Bazar",
      district: "Sangli",
      pincode: "416416",
    },
    contact: "+911010101010",
    rating: 4.5,
    preferredPayment: "UPI",
  },
};

const AddBidBuyer = () => {
  const { id } = useLocalSearchParams();
  const [value, setbidvalue] = useState(0);
  return (
    <SafeAreaView className="flex-1 flex-col bg-[#fff8dc]">
      <Header className="basis-1/12" />
      <View className="basis-1/12 items-center">
        <Text className="font-mblack text-xl">
          Add bid for {farmerinfo.farmer.name}
        </Text>
      </View>
      <ScrollView>
        <View className="p-4 mx-4 mb-6 border-2 rounded-xl bg-[#e3debb]">
          <View className="items-center mb-4">
            <Text className="font-mbold text-lg">Crop Info</Text>
          </View>
          <Text className="font-mregular text-lg">
            Quantity: {farmerinfo.quantity}
          </Text>
          <Text className="font-mregular text-lg">
            Average Bid Value: {farmerinfo.averageBidValue}
          </Text>
          <Text className="font-mregular text-lg">
            Estimated Harvest: {farmerinfo.estimatedHarvest}
          </Text>
          <Text className="font-mregular text-lg">
            Organic: {farmerinfo.organic ? "Yes" : "No"}
          </Text>
        </View>
        <View className="p-4 mx-4 mb-6 border-2 rounded-xl bg-[#e3debb]">
          <View className="items-center mb-4">
            <Text className="font-mbold text-lg">Farmer Info</Text>
          </View>
          <Text className="font-mregular text-lg">
            Name: {farmerinfo.farmer.name}
          </Text>
          <Text className="font-mregular text-lg">
            Location: {farmerinfo.farmer.location.houseNumber},{" "}
            {farmerinfo.farmer.location.street},{" "}
            {farmerinfo.farmer.location.mandli},{" "}
            {farmerinfo.farmer.location.district},{" "}
            {farmerinfo.farmer.location.pincode}
          </Text>
          <Text className="font-mregular text-lg">
            Contact: {farmerinfo.farmer.contact}
          </Text>
          <Text className="font-mregular text-lg">
            Rating: {farmerinfo.farmer.rating}
          </Text>
          <Text className="font-mregular text-lg">
            Preferred Payment: {farmerinfo.farmer.preferredPayment}
          </Text>
        </View>
        <View>
          <View className="p-4 mx-4 mb-6 border-2 rounded-xl bg-[#e3debb]">
            <View className="items-center mb-4">
              <Text className="font-mbold text-lg">Enter your BID</Text>
            </View>
            <View className="items-center mb-4">
              <TextInput
                className="border-2 rounded-lg p-2 w-3/4 bg-white"
                placeholder="Enter your bid value"
                value={value}
                onChange={(value) => setbidvalue(value)}
              />
            </View>
            <View className="items-center mb-4">
              <TouchableOpacity
                className="bg-[#d2042d] rounded-lg w-2/3 items-center"
                onPress={() => {
                  console.log("Enjoy Rohith!!!");
                  router.replace("/modify-bid-buyer");
                }}
              >
                <Text className="font-mbold text-lg text-[#fff] p-2 rounded-lg">
                  Submit Bid
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddBidBuyer;

const styles = StyleSheet.create({});
