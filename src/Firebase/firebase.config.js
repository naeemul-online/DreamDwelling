// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEf1noSkk4VlPXvquXG_UHLUIp6-iHUw",
  authDomain: "a9-dreamdwellings-react.firebaseapp.com",
  projectId: "a9-dreamdwellings-react",
  storageBucket: "a9-dreamdwellings-react.appspot.com",
  messagingSenderId: "814705882876",
  appId: "1:814705882876:web:293fe82c52c60cc4f28979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;