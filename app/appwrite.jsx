import { Client, Account, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('66daed2200046405b1ce'); // Your Appwrite project ID

const account = new Account(client);
const databases = new Databases(client);
const COLLECTION_ID = '66daf29c003d7e24f3c9'
const DATABASE_ID = '66daf292001f9eb48e88'

// Example for storing userId
let userId = null;

const setUserID = (id) => {
  userId = id;
};

const getUserID = () => {
  return userId;
};

export { client, account, databases, setUserID, getUserID,COLLECTION_ID,DATABASE_ID };
