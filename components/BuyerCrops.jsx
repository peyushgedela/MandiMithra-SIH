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
import { SafeAreaView } from "react-native-safe-area-context";

const vegetables = [
  {
    name: "cabbage",
    image: images.cabbage,
  },
  {
    name: "cauliflower",
    image: images.cauliflower,
  },
  {
    name: "coffee",
    image: images.coffee,
  },
  {
    name: "ladyfinger",
    image: images.ladyfinger,
  },
  {
    name: "onion",
    image: images.onion,
  },
  {
    name: "potato",
    image: images.potato,
  },
  {
    name: "tea",
    image: images.tea,
  },
];

const fruits = [
  {
    name: "apple",
    image: images.apple,
  },
  {
    name: "capsicum",
    image: images.capsicum,
  },
  {
    name: "greenPepper",
    image: images.greenPepper,
  },
  {
    name: "guava",
    image: images.guava,
  },
  {
    name: "orange",
    image: images.orange,
  },
  {
    name: "pineapple",
    image: images.pineapple,
  },
  {
    name: "redPepper",
    image: images.redPepper,
  },
  {
    name: "watermelon",
    image: images.watermelon,
  },
];

const grains = [
  {
    name: "maize",
    image: images.maize,
  },
  {
    name: "rice",
    image: images.rice,
  },
  {
    name: "sugarcane",
    image: images.sugarcane,
  },
  {
    name: "wheat",
    image: images.wheat,
  },
];

const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => {
      router.push({
        pathname: "/farmers",
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
      <View>
        <Text>Vegetables</Text>
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
        <Text>Fruits</Text>
        <View>
          {fruits.map((fruit) => (
            <View key={fruit.name}>
              <Text>{fruit.name}</Text>
              <Image source={fruit.image} />
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text>Grains</Text>
        <View>
          {grains.map((grain) => (
            <View key={grain.name}>
              <Text>{grain.name}</Text>
              <Image source={grain.image} />
            </View>
          ))}
        </View>
      </View>
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
