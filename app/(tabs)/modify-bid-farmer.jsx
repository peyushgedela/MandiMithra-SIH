import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { useLocalSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const userInfo = {
  id: 1,
  name: "John Doe",
  bid: 100,
  contact: "+91-1234534565",
  rating: 4.2,
};

const onAccept = () => {};
const onReject = () => {};
const onCounter = () => {};

const ModifyBidFarmer = () => {
  const { id } = useLocalSearchParams();
  const [counterBid, setConterBid] = useState(0);
  return (
    <SafeAreaView className="flex-1 flex-col bg-[#DEEAE1]">
      <Header className="basis-1/12" />
      <View className="justify-center items-center basis-1/12">
        <Text className="font-mblack text-xl">Bidding by UserID: {id}</Text>
      </View>
      <View>
        <View className="m-6 p-3 border-2 rounded-xl bg-[#FDFDFD]">
          <Text className="font-mregular text-base">
            Buyer Name: {userInfo.name} {"\n"}
            Bid Amount: &#x20B9;{userInfo.bid} {"\n"}
            Contact: {userInfo.contact} {"\n"}
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
      <View className="m-6 p-3 border-2 rounded-xl bg-[#FDFDFD] items-center">
        <Text className="font-mblack text-base">Provide a Counter Offer</Text>
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
                setConterBid(value);
              }}
              placeholder="Counter your price"
              keyboardType="number-pad"
            />
          </View>
          <View className="items-center">
            <TouchableOpacity
              className="bg-[#BBEEDC] p-3 mt-4 rounded-3xl w-5/6 items-center"
              onPress={onCounter}
            >
              <Text className="text-black font-mbold text-base">Counter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModifyBidFarmer;

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
});
