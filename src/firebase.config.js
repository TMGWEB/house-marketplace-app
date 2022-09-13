import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK3vd3Z-duLhJ6VW8kENqXf_scuYU9aP8",
  authDomain: "house-marketplace-app-7c02f.firebaseapp.com",
  projectId: "house-marketplace-app-7c02f",
  storageBucket: "house-marketplace-app-7c02f.appspot.com",
  messagingSenderId: "731136267856",
  appId: "1:731136267856:web:8008d017cec2e1ca1de355",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
