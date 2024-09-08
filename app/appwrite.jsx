import AsyncStorage from '@react-native-async-storage/async-storage';
import { Client, Account, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('66daed2200046405b1ce'); // Your Appwrite project ID

const account = new Account(client);
const databases = new Databases(client);
const COLLECTION_ID = '66daf29c003d7e24f3c9';
const FARMERS_COLLECTON_ID = '66dd19790008eb8683a5';
const DATABASE_ID = '66daf292001f9eb48e88';

// Variable to hold user ID
let userId = null;

// Function to set user ID and store in AsyncStorage
const setUserID = async (newUserId) => {
  userId = newUserId;
  await AsyncStorage.setItem('userId', newUserId); // Persist the userId in AsyncStorage
};

// Function to get user ID from AsyncStorage
const getUserID = async () => {
  if (!userId) {
    // If userId is not already set, fetch it from AsyncStorage
    userId = await AsyncStorage.getItem('userId');
    console.log("User ID retrieved from storage:", userId);
  }
  return userId;
};

// Function to retrieve user session from AsyncStorage
const getSession = async () => {
  try {
    const session = await AsyncStorage.getItem('userSession');
    return session ? JSON.parse(session) : null;
  } catch (error) {
    console.error('Error retrieving session:', error);
    return null;
  }
};

export { client, account, databases, getUserID, setUserID, getSession, COLLECTION_ID, DATABASE_ID, FARMERS_COLLECTON_ID };
