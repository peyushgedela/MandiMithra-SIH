import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import images from "../constants/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const vegetables = [
  {
    id: 1,
    name: "cabbage",
    image: images.cabbage,
  },
  {
    id: 2,
    name: "cauliflower",
    image: images.cauliflower,
  },
  {
    id: 3,
    name: "coffee",
    image: images.coffee,
  },
  {
    id: 4,
    name: "ladyfinger",
    image: images.ladyfinger,
  },
  {
    id: 5,
    name: "onion",
    image: images.onion,
  },
  {
    id: 6,
    name: "potato",
    image: images.potato,
  },
  {
    id: 7,
    name: "tea",
    image: images.tea,
  },
];

const fruits = [
  {
    id: 1,
    name: "apple",
    image: images.apple,
  },
  {
    id: 2,
    name: "capsicum",
    image: images.capsicum,
  },
  {
    id: 3,
    name: "greenPepper",
    image: images.greenPepper,
  },
  {
    id: 4,
    name: "guava",
    image: images.guava,
  },
  {
    id: 5,
    name: "orange",
    image: images.orange,
  },
  {
    id: 6,
    name: "pineapple",
    image: images.pineapple,
  },
  {
    id: 7,
    name: "redPepper",
    image: images.redPepper,
  },
  {
    id: 8,
    name: "watermelon",
    image: images.watermelon,
  },
];

const grains = [
  {
    id: 1,
    name: "maize",
    image: images.maize,
  },
  {
    id: 2,
    name: "rice",
    image: images.rice,
  },
  {
    id: 3,
    name: "sugarcane",
    image: images.sugarcane,
  },
  {
    id: 4,
    name: "wheat",
    image: images.wheat,
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => {
      router.push({
        pathname: "/crop-farmers",
        params: { name: item.name },
      });
    }}
  >
    <View className="p-2 rounded-3xl bg-stone-200 border-2 border-gray-400">
      <Image source={item.image} style={styles.image} />
      <Text className="font-mregular" style={styles.itemText}>
        {item.name}
      </Text>
    </View>
  </TouchableOpacity>
);

const BuyerCrops = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text className="font-mblack text-2xl pl-3">Vegetables</Text>
          <FlatList
            data={vegetables}
            renderItem={renderItem}
            keyExtractor={(item) => {
              item.id;
            }}
            contentContainerStyle={{ justifyContent: "space-between" }}
            horizontal={true}
          />
        </View>
        <View>
          <Text className="font-mblack text-2xl pl-3">Fruits</Text>
          <FlatList
            data={fruits}
            renderItem={renderItem}
            keyExtractor={(item) => {
              item.id;
            }}
            contentContainerStyle={{ justifyContent: "space-between" }}
            horizontal={true}
          />
        </View>
        <View>
          <Text className="font-mblack text-2xl pl-3">Grains</Text>
          <FlatList
            data={grains}
            renderItem={renderItem}
            keyExtractor={(item) => {
              item.id;
            }}
            contentContainerStyle={{ justifyContent: "space-between" }}
            horizontal={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyerCrops;

const styles = StyleSheet.create({
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
});
