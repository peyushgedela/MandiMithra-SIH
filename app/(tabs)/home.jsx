import { StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import MainNav from "../../components/MainNav";

const Home = () => {
  return (
    <SafeAreaView className="flex flex-col" style={styles.container}>
      <Header className="basis-1/12" />
      <MainNav className="basis-2/12" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff8dc",
  },
});
