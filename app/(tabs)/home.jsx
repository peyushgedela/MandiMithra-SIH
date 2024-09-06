import { StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import MainNav from "../../components/MainNav";

const Home = () => {
  const [activeInd, setActiveInd] = useState(0);
  const backgroundColors = ["#fff8dc", "#DCFFF2"];

  return (
    <SafeAreaView
      className="flex-1 flex-col pt-3"
      style={{ backgroundColor: backgroundColors[activeInd] }}
    >
      <Header className="basis-1/12" />
      <MainNav
        className="basis-1/12"
        activeInd={activeInd}
        setActiveInd={setActiveInd}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
