import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const buyerBids = [
  {
    id: 1,
    farmerName: "Rajesh Kumar",
    crop: "Basmati Rice",
    bidOffered: 85000,
    stateOfResponse: "accepted",
  },
  {
    id: 2,
    farmerName: "Sita Verma",
    crop: "Wheat",
    bidOffered: 72000,
    stateOfResponse: "rejected",
  },
  {
    id: 3,
    farmerName: "Aman Singh",
    crop: "Soybeans",
    bidOffered: 95000,
    stateOfResponse: "countered",
  },
  {
    id: 4,
    farmerName: "Rohini Patel",
    crop: "Maize",
    bidOffered: 67000,
    stateOfResponse: "pending",
  },
  {
    id: 5,
    farmerName: "Mohan Joshi",
    crop: "Barley",
    bidOffered: 81000,
    stateOfResponse: "countered",
  },
  {
    id: 6,
    farmerName: "Neha Sharma",
    crop: "Sorghum",
    bidOffered: 58000,
    stateOfResponse: "rejected",
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

const BuyerBidding = () => {
  return (
    <ScrollView>
      {buyerBids.map((bid) => (
        <TouchableOpacity
          key={bid.id}
          onPress={() => {
            router.push({
              pathname: "/modify-bid-buyer",
              params: { id: bid.id },
            });
          }}
          disabled={bid.stateOfResponse === "accepted" || bid.stateOfResponse === "rejected" || bid.stateOfResponse === "pending"}
        >
          <View
            style={[styles.bidContainer]}
            className="m-3 p-3 border-2 rounded-xl"
          >
            <View>
              <Text className="font-mregular text-base">
                Buyer Name: {bid.farmerName} {"\n"}
                Crop: {bid.crop} {"\n"}
                Bid Amount: &#x20B9;{bid.bidOffered}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: getBackgroundColor(bid.stateOfResponse),
                padding: 10,
                marginTop: 5,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text className="text-white">{bid.stateOfResponse}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bidContainer: {
    backgroundColor: "#eaddca",
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default BuyerBidding;
