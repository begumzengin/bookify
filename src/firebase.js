import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBus19ad4fH671GOWC3hkdtUpWN8-2zW3c",
  authDomain: "bookify-11fa2.firebaseapp.com",
  projectId: "bookify-11fa2",
  storageBucket: "bookify-11fa2.appspot.com",
  messagingSenderId: "540579173459",
  appId: "1:540579173459:web:f4017219aeea97890622a6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
