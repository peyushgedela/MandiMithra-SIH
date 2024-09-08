import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { databases,DATABASE_ID,FARMERS_COLLECTON_ID, COLLECTION_ID } from "../appwrite";
import { Query } from "appwrite";

const fetchUserNameById = async (userId) => {
  try {
      const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [
              Query.equal('userid', userId)
          ]
      );
      return response.documents.length > 0 ? response.documents[0].name : null;
  } catch (error) {
      console.error('Error fetching user name:', error);
      throw error;
  }
};

const fetchCropDetailsAndUserData = async (name) => {
  try {
      // Fetch crop details based on crop name
      const cropDocuments = await databases.listDocuments(
          DATABASE_ID,
          FARMERS_COLLECTON_ID,
          [
              Query.equal('crop_name', name)
          ]
      );

      if (!cropDocuments || cropDocuments.documents.length === 0) {
        console.log('No crop documents found for the specified crop name.');
        return []; // Return an empty array if no documents are found
      }

      const cropDetailsWithUserNames = await Promise.all(cropDocuments.documents.map(async (cropDoc) => {
          const userId = cropDoc.userid;  // Assuming 'userId' is a field in the crop document

          // Fetch user name from another database
          const userName = await fetchUserNameById(userId);

          // Return an array containing the user name, crop quantity, and minimum bid value
          return {
              userId:userId,
              name: userName || 'Unknown User', 
              crop_quantity: cropDoc.crop_quantity, 
              min_bid_value: cropDoc.min_bid_value 
          };
      }));

      return cropDetailsWithUserNames;
  } catch (error) {
      console.error('Error fetching crop details and user names:', error);
      throw error;
  }
};

const ViewFarmers = () => {
  const [cropData, setCropData] = useState([]);
  const { name } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await fetchCropDetailsAndUserData(name); // Pass the crop name
            setCropData(data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching crop data:', error);
            setIsLoading(false);
        }
    };

    fetchData();  // Call the function when the component mounts
  }, []); 

  if (isLoading) {
    return <Text>Loading...</Text>; // Render loading state
  }
  if (cropData.length === 0) {
    return <SafeAreaView style={styles.safeArea}>
    <Header className="basis-1/12" />
    <View style={styles.titleContainer}>
      <Text style={styles.titleText} className="font-mregular">
        No crops found for {name}
      </Text>
    </View>
    </SafeAreaView>
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header className="basis-1/12" />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText} className="font-mblack">
          Available {name} Farmers
        </Text>
      </View>
      <ScrollView>
        {cropData.map((farmer, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              router.push({
                pathname: "/add-bid-buyer",
                params: { id: farmer.userId, cropName:name },
              });
            }}
            style={styles.cardContainer}
          >
            <View style={styles.cardContent}>
              <View style={styles.infoContainer}>
                <Text style={styles.farmerName}>{farmer.name}</Text>
                <Text style={styles.quantity}>Quantity: {farmer.crop_quantity}</Text>
                {(
                  <Text style={styles.organicLabel}>Organic</Text>
                )}
              </View>
              <View className="flex flex-col">
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>{'4.5'}</Text>
                  <Text style={styles.star}>⭐</Text>
                </View>
                <View style={styles.bidContainer}>
                  <Text className="font-mregular text-[#ff0000]">
                    Average Bid Value
                  </Text>
                  <Text style={styles.bidAmount}>
                    &#x20B9;{farmer.min_bid_value.toLocaleString()}
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
    fontSize: 25,
  },
  grainType: {
    fontSize: 14,
    marginVertical: 5,
  },
  quantity: {
    fontSize: 18,
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
