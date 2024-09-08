import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const farmerBids = [
  {
    id: 1,
    buyerName: "John Doe",
    crop: "Basmati Rice",
    bidOffered: 85000,
    stateOfOffer: "accepted",
  },
  {
    id: 2,
    buyerName: "Jane Smith",
    crop: "Wheat",
    bidOffered: 72000,
    stateOfOffer: "rejected",
  },
  {
    id: 3,
    buyerName: "Michael Johnson",
    crop: "Soybeans",
    bidOffered: 95000,
    stateOfOffer: "countered",
  },
  {
    id: 4,
    buyerName: "Emily Davis",
    crop: "Maize",
    bidOffered: 67000,
    stateOfOffer: "pending",
  },
  {
    id: 5,
    buyerName: "Chris Evans",
    crop: "Barley",
    bidOffered: 81000,
    stateOfOffer: "countered",
  },
  {
    id: 6,
    buyerName: "Olivia Taylor",
    crop: "Sorghum",
    bidOffered: 58000,
    stateOfOffer: "rejected",
  },
];

const getBackgroundColor = (stateOfOffer) => {
  switch (stateOfOffer) {
    case "accepted":
      return "#03a913";
    case "rejected":
      return "#c30000";
    case "countered":
      return "#848884";
    default:
      return "#ffaa33";
  }
};

const FarmerBidding = () => {
  return (
    <ScrollView>
      {farmerBids.map((bid) => (
        <TouchableOpacity
          key={bid.id}
          onPress={() => {
            router.push("/modify-bid-farmer");
          }}
        >
          <View
            style={[styles.bidContainer]}
            className="m-3 p-3 border-2 rounded-xl"
          >
            <View>
              <Text className="font-mregular text-base">
                Buyer Name: {bid.buyerName} {"\n"}
                Crop: {bid.crop} {"\n"}
                Bid Amount: &#x20B9;{bid.bidOffered}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: getBackgroundColor(bid.stateOfOffer),
                padding: 10,
                marginTop: 5,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text className="text-white">{bid.stateOfOffer}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bidContainer: {
    padding: 16,
    margin: 16,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#c4dbca",
  },
});

export default FarmerBidding;
