import React, { useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "../../components/Header";

const userInfo = {
  id: 1,
  name: "John Doe",
  initialBid: 100, // Buyer's initial bid
  counterOffer: 120, // Farmer's counteroffer
  contact: "+91-1234534565",
  rating: 4.2,
};

const ModifyBidBuyer = () => {
  const { id } = useLocalSearchParams();
  const [buyerCounterBid, setBuyerCounterBid] = useState(0);

  // Function to handle acceptance of the farmer's counteroffer
  const onAccept = () => {
    alert(
      "You have accepted the farmer's counteroffer of ₹" + userInfo.counterOffer
    );
    router.replace("/home");
    // Here, you would normally handle the business logic for accepting the bid
  };

  // Function to handle rejection of the farmer's counteroffer
  const onReject = () => {
    alert("You have rejected the farmer's counteroffer.");
    router.replace("/home");
    // Handle the business logic for rejecting the bid
  };

  // Function to handle submission of a new counteroffer by the buyer
  const onCounter = () => {
    alert("You have countered with ₹" + buyerCounterBid);
    router.replace("/home");
    // Business logic for sending the counteroffer
  };

  // Function to initiate a phone call to the farmer
  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <SafeAreaView className="flex-1 flex-col bg-[#fff8dc]">
      <Header className="basis-1/12" />
      <View className="justify-center items-center basis-1/12">
        <Text className="font-mblack text-xl">Bidding with FarmerID: {id}</Text>
      </View>
      <View>
        <View className="m-6 p-3 border-2 rounded-xl bg-[#eaddca]">
          <Text className="font-mregular text-base">
            Buyer Name: {userInfo.name} {"\n"}
            Initial Bid: &#x20B9;{userInfo.initialBid} {"\n"}
            Farmer's Counteroffer: &#x20B9;{userInfo.counterOffer} {"\n"}
            Contact:{" "}
            <Text
              onPress={() => handlePhonePress(userInfo.contact)}
              style={styles.phoneLink}
            >
              {userInfo.contact}
            </Text>{" "}
            {"\n"}
            Rating: {userInfo.rating}
          </Text>
          <View className="flex flex-row justify-evenly">
            <TouchableOpacity
              className="bg-[#4CBB17] p-3 my-4 rounded-3xl w-1/3 items-center"
              onPress={onAccept}
            >
              <Text className="text-white font-mbold text-base">Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#EE4B2B] p-3 my-4 rounded-3xl w-1/3 items-center"
              onPress={onReject}
            >
              <Text className="text-white font-mbold text-base">Decline</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="m-6 p-3 border-2 rounded-xl bg-[#eaddca] items-center">
        <Text className="font-mblack text-base">
          Provide Your Counter Offer
        </Text>
        <View style={styles.input}>
          <View
            className="flex flex-row items-center mt-4"
            style={styles.innerinput}
          >
            <View className="px-1 pr-2">
              <Icon name="rupee" size={20} color="black" style={styles.icon} />
            </View>
            <TextInput
              className="w-5/6"
              onChangeText={(value) => {
                setBuyerCounterBid(value);
              }}
              placeholder="Counter your price"
              keyboardType="number-pad"
            />
          </View>
          <View className="items-center">
            <TouchableOpacity
              className="bg-[#f28c28] p-3 mt-4 rounded-3xl w-5/6 items-center"
              onPress={onCounter}
            >
              <Text className="text-white font-mbold text-base">Counter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  phoneLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default ModifyBidBuyer;
