import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import MainNav from "../../components/MainNav";
import Icon from "react-native-vector-icons/FontAwesome6";
import BuyerCrops from "../../components/BuyerCrops";
import FarmerCrops from "../../components/FarmerCrops";
import BuyerBidding from "../../components/BuyerBidding";
import FarmerBidding from "../../components/FarmerBidding";
import Blogs from "../../components/Blogs";

const Home = () => {
  const [activeInd, setActiveInd] = useState(0); // 0 for Buyer, 1 for Farmer
  const [currentPage, setCurrentPage] = useState("Buy"); // Default page is "Buy"
  const backgroundColors = ["#fff8dc", "#DEEAE1"];

  // Conditional rendering of content based on user role and current page
  const renderContent = () => {
    if (activeInd === 0) {
      // Buyer View
      switch (currentPage) {
        case "Buy":
          return <BuyerCrops />;
        case "Bidding":
          return <BuyerBidding />;
        case "Blogs":
          return <Blogs />;
        default:
          return <BuyerCrops />;
      }
    } else {
      // Farmer View
      switch (currentPage) {
        case "Crops":
          return <FarmerCrops />;
        case "Bidding":
          return <FarmerBidding />;
        case "Blogs":
          return <Blogs />;
        default:
          return <FarmerCrops />;
      }
    }
  };

  const renderBottomNav = () => {
    if (activeInd === 0) {
      return (
        <View className="flex flex-row" style={styles.bottomNavBuy}>
          <TouchableOpacity
            className="basis-1/3 justify-center items-center"
            onPress={() => setCurrentPage("Buy")}
            style={styles.navButton}
          >
            <View className="justify-center items-center">
              <Icon name={"cart-shopping"} size={20} />
            </View>
            <Text className="font-mlight text-xs">Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="basis-1/3 justify-center items-center"
            onPress={() => setCurrentPage("Bidding")}
            style={styles.navButton}
          >
            <View className="justify-center items-center">
              <Icon name={"hand"} size={20} />
            </View>
            <Text className="font-mlight text-xs">Biddings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="basis-1/3 justify-center items-center"
            onPress={() => setCurrentPage("Blogs")}
            style={styles.navButton}
          >
            <View className="justify-center items-center">
              <Icon name={"book"} size={20} />
            </View>
            <Text className="font-mlight text-xs">Blogs</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View className="flex flex-row" style={styles.bottomNavSell}>
          <TouchableOpacity
            className="basis-1/3 justify-center items-center"
            onPress={() => setCurrentPage("Crops")}
            style={styles.navButton}
          >
            <View className="justify-center items-center">
              <Icon name={"plant-wilt"} size={20} />
            </View>
            <Text className="font-mlight text-xs">Crops</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="basis-1/3 justify-center items-center"
            onPress={() => setCurrentPage("Bidding")}
            style={styles.navButton}
          >
            <View className="justify-center items-center">
              <Icon name={"hammer"} size={20} />
            </View>
            <Text className="font-mlight text-xs">Bids</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="basis-1/3 justify-center items-center"
            onPress={() => setCurrentPage("Blogs")}
            style={styles.navButton}
          >
            <View className="justify-center items-center">
              <Icon name={"book"} size={20} />
            </View>
            <Text className="font-mlight text-xs">Blogs</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

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

      <View style={styles.contentContainer}>{renderContent()}</View>

      {renderBottomNav()}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  bottomNavBuy: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#EADDCA",
    borderRadius: 25,
  },
  bottomNavSell: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#C4DBCA",
    borderRadius: 25,
  },
  navButton: {
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
