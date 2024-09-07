import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import images from "../constants/images";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome6";

const fcrops = [
  {
    name: "cabbage",
    img: images.cabbage,
  },
  {
    name: "cauliflower",
    img: images.cauliflower,
  },
  {
    name: "coffee",
    img: images.coffee,
  },
  {
    name: "tea",
    img: images.tea,
  },
  {
    name: "apple",
    img: images.apple,
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => router.push("/bidders", { name: item.name })}
  >
    <View className="p-2 rounded-3xl bg-stone-200 border-2 border-gray-400">
      <Image source={item.img} style={styles.image} />
      <Text className="font-mregular" style={styles.itemText}>
        {item.name}
      </Text>
    </View>
  </TouchableOpacity>
);

const FarmerCrops = () => {
  return (
    <View className="flex flex-1 flex-col">
      <View className="basis-1/12 pl-6">
        <Text className="font-mblack text-xl">My Crops</Text>
      </View>
      <View>
        <FlatList
          data={fcrops}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.list}
        />
      </View>
      <View style={styles.floatingButton}>
        <TouchableOpacity onPress={() => router.push("/addcrop")}>
          <Icon name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FarmerCrops;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  list: {
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  itemText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#548860",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
