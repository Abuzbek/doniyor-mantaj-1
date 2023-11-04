// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYeNTlPPTGBRexZg8SN-DiF3VYGFkLd3w",
  authDomain: "test-e32da.firebaseapp.com",
  databaseURL: "https://test-e32da-default-rtdb.firebaseio.com",
  projectId: "test-e32da",
  storageBucket: "test-e32da.appspot.com",
  messagingSenderId: "575454791255",
  appId: "1:575454791255:web:b17e48804c2b5a464e8512",
  measurementId: "G-5X64CGFFX6",
};

// Initialize Firebase
let analytics;
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
if (firebaseApp.name && typeof window !== "undefined") {
  analytics = getAnalytics(firebaseApp);
}
export const firebaseDatabase = getDatabase(firebaseApp);
