// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-aQ3hyxrw6zKjpMUp6Ov-XTGQv0pQhMA",
  authDomain: "react-f9768.firebaseapp.com",
  projectId: "react-f9768",
  storageBucket: "react-f9768.appspot.com",
  messagingSenderId: "865524296370",
  appId: "1:865524296370:web:b119cfb716ef38a83377ab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);