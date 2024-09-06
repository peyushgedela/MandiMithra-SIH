import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const vals = [
  {
    name: "Buyer",
  },
  {
    name: "Farmer",
  },
];

const MainNav = ({ activeInd, setActiveInd }) => {
  const selectCategory = (index) => {
    setActiveInd(index);
  };

  return (
    <View style={styles.container}>
      {vals.map((val, index) => {
        return (
          <TouchableOpacity
            className="w-1/3 items-center"
            key={val.name}
            style={activeInd === index ? styles.buttonClicked : styles.button}
            onPress={() => selectCategory(index)}
          >
            <Text
              className="font-mbold text-base"
              style={activeInd === index ? styles.textClicked : styles.text}
            >
              {val.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MainNav;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonClicked: {
    backgroundColor: "#4CBB17",
    padding: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#EE4B2B",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "#000000",
  },
  textClicked: {
    color: "#ffffff",
  },
});
