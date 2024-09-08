import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import Header from "../../components/Header";

const bidders = [
  {
    id: 1,
    name: "John Doe",
    bid: 100,
  },
  {
    id: 2,
    name: "Jane Doe",
    bid: 200,
  },
  {
    id: 3,
    name: "John Smith",
    bid: 150,
  },
];

const Bidders = () => {
  const { name } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex flex-col" style={styles.container}>
      <Header className="basis-1/12" />
      <View className="justify-center items-center basis-1/12">
        <Text className="font-mblack text-xl">Bidders for {name}</Text>
      </View>
      <ScrollView className="flex flex-col">
        {bidders.map((bidder, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => {
              router.push({
                pathname: "/modify-bid-farmer",
                params: { id: bidder.id },
              });
            }}
          >
            <View className="m-3 p-3 border-2 border-gray-500 rounded-xl bg-[#cfe0d3]">
              <Text className="font-mregular text-base">
                Buyer Name: {bidder.name} {"\n"}
                Bid Amount: &#x20B9;{bidder.bid}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEEAE1",
  },
  button: {
    elevation: 10,
  },
});

export default Bidders;
