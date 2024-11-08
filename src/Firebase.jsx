
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDTHwFDAdxZgpNwNSdYa4RAWxyrt2FDC8Y",
  authDomain: "sd-s-chat.firebaseapp.com",
  projectId: "sd-s-chat",
  storageBucket: "sd-s-chat.firebasestorage.app",
  messagingSenderId: "966818536329",
  appId: "1:966818536329:web:b7669ee2e905fff0f89f58"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);