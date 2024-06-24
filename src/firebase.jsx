/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnaepCpX-KTKbA56wutJisabNp03LKTcg",
  authDomain: "notepad-d7930.firebaseapp.com",
  projectId: "notepad-d7930",
  storageBucket: "notepad-d7930.appspot.com",
  messagingSenderId: "902056397173",
  appId: "1:902056397173:web:cdc3e53e3b7ba225626b3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
