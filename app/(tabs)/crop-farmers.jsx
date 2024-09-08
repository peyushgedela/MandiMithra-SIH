import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";

const farmers = [
  {
    id: 1,
    name: "Ravi Kumar",
    grain: "Basmati Rice",
    quantity: "X Ton",
    rating: 4.5,
    bid: 85000,
    organic: true,
  },
  {
    id: 2,
    name: "Kaustubh Baby",
    grain: "Black Rice",
    quantity: "X Ton",
    rating: 4.5,
    bid: 85000,
    organic: false,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    grain: "Basmati Rice",
    quantity: "X Ton",
    rating: 4.5,
    bid: 85000,
    organic: true,
  },
];

const ViewFarmers = () => {
  const { name } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header className="basis-1/12" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText} className="font-mblack">
          Available {name} Farmers
        </Text>
      </View>
      <ScrollView>
        {farmers.map((farmer, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              router.push({
                pathname: "/add-bid-buyer",
                params: { id: farmer.id },
              });
            }}
            style={styles.cardContainer}
          >
            <View style={styles.cardContent}>
              <View style={styles.infoContainer}>
                <Text style={styles.farmerName}>{farmer.name}</Text>
                <Text style={styles.grainType}>{farmer.grain}</Text>
                <Text style={styles.quantity}>Quantity: {farmer.quantity}</Text>
                {farmer.organic && (
                  <Text style={styles.organicLabel}>Organic</Text>
                )}
              </View>
              <View className="flex flex-col">
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>{farmer.rating}</Text>
                  <Text style={styles.star}>⭐</Text>
                </View>
                <View style={styles.bidContainer}>
                  <Text className="font-mregular text-[#ff0000]">
                    Average Bid Value
                  </Text>
                  <Text style={styles.bidAmount}>
                    &#x20B9;{farmer.bid.toLocaleString()}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewFarmers;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8DC",
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 20,
  },
  cardContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F3EAC6",
    borderWidth: 2,
    borderColor: "gray",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoContainer: {
    flex: 1,
  },
  farmerName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  grainType: {
    fontSize: 14,
    marginVertical: 5,
  },
  quantity: {
    fontSize: 14,
    color: "#555",
  },
  organicLabel: {
    marginTop: 5,
    fontSize: 12,
    backgroundColor: "#4CBB4f",
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  ratingContainer: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "#e6dfaf",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    fontSize: 18,
    fontWeight: "bold",
    paddingRight: 5,
  },
  star: {
    fontSize: 30,
  },
  bidContainer: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    alignItems: "flex-end",
    backgroundColor: "#e6dfaf",
    padding: 8,
    borderRadius: 10,
  },
  bidAmount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3D3C3A",
  },
});
