// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAUaBSmmoM1TyxmPJuyZGOSKqv3zWvQo1A",
  authDomain: "liveproject-6fd27.firebaseapp.com",
  projectId: "liveproject-6fd27",
  storageBucket: "liveproject-6fd27.appspot.com",
  messagingSenderId: "764912994860",
  appId: "1:764912994860:web:fd2ebc622d512b80011f89",
  measurementId: "G-GZWKK1KBTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
