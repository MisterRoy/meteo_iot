// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, get, ref} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3e4IMLRMOfGXLSo7CO6bI7v8rjH2bK84",
  authDomain: "meteo-iot-app.firebaseapp.com",
  databaseURL: "https://meteo-iot-app-default-rtdb.firebaseio.com",
  projectId: "meteo-iot-app",
  storageBucket: "meteo-iot-app.appspot.com",
  messagingSenderId: "814470510672",
  appId: "1:814470510672:web:b4d1f39518198154b5f955",
  measurementId: "G-KW4FCXHH0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);




