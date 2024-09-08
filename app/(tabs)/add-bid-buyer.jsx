import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Header from "../../components/Header";
import { databases, DATABASE_ID, COLLECTION_ID, FARMERS_COLLECTON_ID } from "../appwrite";
import { Query } from "appwrite";

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

const fetchUserNameById = async (userId) => {
  try {
    // Fetch user details based on userId
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal('userid', userId)]
    );

    // Check if the document exists and return name and phone number
    if (response.documents.length > 0) {
      const user = response.documents[0];
      return {
        name: user.name || 'Unknown User',
        phoneNumber: user.phonenumber || 'Not Provided'
      };
    } else {
      return {
        name: 'Unknown User',
        phoneNumber: 'Not Provided'
      };
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    // Return default values in case of an error
    return {
      name: 'Unknown User',
      phoneNumber: 'Not Provided'
    };
  }
};

const fetchCropDetailsByUserIdAndCropName = async (userId, cropName) => {
  try {
    // Fetch crop details based on userId and crop_name
    const response = await databases.listDocuments(
      DATABASE_ID,
      FARMERS_COLLECTON_ID,
      [
        Query.equal('userid', userId),
        Query.equal('crop_name', cropName)
      ]
    );

    // Check if any documents are returned
    if (response.documents.length > 0) {
      // Return an array of crop details
      return response.documents.map(doc => ({
        crop_quantity: doc.crop_quantity,
        min_bid_value: doc.min_bid_value,
        harvest_date: doc.harvest_date
      }));
    } else {
      // Return an empty array if no documents are found
      return [];
    }
  } catch (error) {
    console.error('Error fetching crop details:', error);
    // Return an empty array in case of an error
    return [];
  }
};


const AddBidBuyer = () => {
  const { id, cropName } = useLocalSearchParams();
  const [value, setbidvalue] = useState(0);
  const [userData, setUserData] = useState([])
  const [cropData, setCropData] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchUserNameById(id); // Pass the crop name
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();  // Call the function when the component mounts
  }, []);

  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const data = await fetchCropDetailsByUserIdAndCropName(id, cropName);
        setCropData(data);
      } catch (error) {
        console.error('Error fetching crop data:', error);
      }
    };

    fetchCropData();  // Call the function when the component mounts
  }, []);


  return (
    <SafeAreaView className="flex-1 flex-col bg-[#fff8dc]">
      <Header className="basis-1/12" />
      <View className="basis-1/12 items-center">
        <Text className="font-mblack text-xl">
          Add bid for {userData.name}
        </Text>
      </View>
      <ScrollView>
        {cropData.map((crop, index) => (
          <View key={index}>
            <View className="p-4 mx-4 mb-6 border-2 rounded-xl bg-[#e3debb]">
              <View className="items-center mb-4">
                <Text className="font-mbold text-lg">Crop Info</Text>
              </View>
              <Text className="font-mregular text-lg">
                Quantity: {crop.crop_quantity}
              </Text>
              <Text className="font-mregular text-lg">
                Average Bid Value: {crop.min_bid_value}
              </Text>
              <Text className="font-mregular text-lg">
                Estimated Harvest: {crop.harvest_date}
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
                Name: {userData.name}
              </Text>
              <Text className="font-mregular text-lg">
                Location: {farmerinfo.farmer.location.houseNumber},{" "}
                {farmerinfo.farmer.location.street},{" "}
                {farmerinfo.farmer.location.mandli},{" "}
                {farmerinfo.farmer.location.district},{" "}
                {farmerinfo.farmer.location.pincode}
              </Text>
              <Text className="font-mregular text-lg">
                Contact: {userData.phoneNumber}
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
                    className="bg-[#33b249] rounded-lg w-2/3 items-center"
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
            </View></View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddBidBuyer;

const styles = StyleSheet.create({});