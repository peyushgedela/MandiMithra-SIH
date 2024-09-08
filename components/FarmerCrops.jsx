import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import images from "../constants/images";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome6";
import { databases, DATABASE_ID, FARMERS_COLLECTON_ID, getUserID } from "../app/appwrite";
import { Query } from "appwrite";

// Function to get document IDs by userId
const getDocumentIdsByUserId = async (userId) => {
  try {
    const result = await databases.listDocuments(
      DATABASE_ID,
      FARMERS_COLLECTON_ID,
      [Query.equal('userid', userId)]
    );

    if (result.documents && result.documents.length > 0) {
      const documentIds = result.documents.map((doc) => doc.$id);
      console.log(documentIds);
      return documentIds;
    } else {
      return null; // Return null if no documents found
    }
  } catch (error) {
    console.error("Error retrieving documentId:", error);
    throw error;
  }
};

// Function to render each crop item
const renderItem = ({ item }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => {
      router.push({
        pathname: "/bidders",
        params: { name: item.name },
      });
    }}
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
  const [userId, setUserId] = useState(null);
  const [cropsData, setCropsData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false); // State to track if no crops are available

  // Fetch user ID when component mounts
  useEffect(() => {
    const fetchUserId = async () => {
      const id = await getUserID();
      setUserId(id);
    };
    fetchUserId();
  }, []);

  // Fetch crops based on userId
  useEffect(() => {
    const fetchAndRenderCrops = async () => {
      if (userId) {
        const cropNames = await fetchCropNameByDocumentId();

        if (!cropNames || cropNames.length === 0) {
          setIsEmpty(true); // If no crops found, set isEmpty to true
          return;
        }

        const cropsWithImages = cropNames.map((name) => {
          const imageName = name.toLowerCase(); // Convert crop name to lowercase
          const imagePath = images[imageName];  // Dynamically create the image path

          return {
            name,    // Crop name
            img: imagePath || images.defaultImage, // Use default image if the crop image doesn't exist
          };
        });

        setCropsData(cropsWithImages); // Set the data for FlatList rendering
      }
    };

    fetchAndRenderCrops();
  }, [userId]);

  // Function to fetch crop names by document ID
  const fetchCropNameByDocumentId = async () => {
    try {
      const documentIds = await getDocumentIdsByUserId(userId);
      
      if (!documentIds) {
        return []; // Return empty array if no document IDs found
      }

      const cropNames = [];
      for (let documentId of documentIds) {
        const document = await databases.getDocument(DATABASE_ID, FARMERS_COLLECTON_ID, documentId);
        const cropName = document.crop_name;
        cropNames.push(cropName);
        console.log("Crop name fetched:", cropName);
      }

      return cropNames;
    } catch (error) {
      console.error("Error fetching crop names by documentId:", error.message);
      return [];
    }
  };

  return (
    <View className="flex flex-1 flex-col">
      <View className="basis-1/12 pl-6">
        <Text className="font-mblack text-xl">My Crops</Text>
      </View>
      <View>
        {isEmpty ? ( // Conditionally render based on crops availability
          <Text style={styles.emptyText}>You have not uploaded any crops yet.</Text>
        ) : (
          <FlatList
            data={cropsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            numColumns={3}
            contentContainerStyle={styles.list}
          />
        )}
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
  emptyText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#999",
  },
});
