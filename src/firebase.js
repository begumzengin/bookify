import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBus19ad4fH671GOWC3hkdtUpWN8-2zW3c",
  authDomain: "bookify-11fa2.firebaseapp.com",
  projectId: "bookify-11fa2",
  storageBucket: "bookify-11fa2.appspot.com",
  messagingSenderId: "540579173459",
  appId: "1:540579173459:web:f4017219aeea97890622a6",
  databaseURL:
    "https://bookify-11fa2-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
