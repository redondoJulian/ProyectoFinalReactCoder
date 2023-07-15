//https://firebase.google.com/docs/firestore/query-data/get-data?hl=es-419 < Documentacion y codigo extraiído de ahí

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIg4I_ausOUzdWH7MA2Lok9DNptnn5NsM",
  authDomain: "julishop-33190.firebaseapp.com",
  projectId: "julishop-33190",
  storageBucket: "julishop-33190.appspot.com",
  messagingSenderId: "601675612019",
  appId: "1:601675612019:web:1bb40f354ca41bcab50f06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
