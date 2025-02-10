// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-12f19.firebaseapp.com",
  projectId: "real-estate-12f19",
  storageBucket: "real-estate-12f19.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "208626720376",
  appId: "1:208626720376:web:11cff6d19028edf0ebd78d",
  measurementId: "G-XJLW70EL9M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics (only if needed)
export const analytics = getAnalytics(app);
