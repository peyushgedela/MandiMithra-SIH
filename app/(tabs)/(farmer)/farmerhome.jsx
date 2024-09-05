import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import MainNav from "../../../components/MainNav";

const farmerhome = () => {
  return (
    <SafeAreaView className="flex flex-col" style={styles.container}>
      <Header className="basis-1/12" />
      <MainNav className="basis-2/12" name="farmer" />
    </SafeAreaView>
  );
};

export default farmerhome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCFFF2",
  },
});
