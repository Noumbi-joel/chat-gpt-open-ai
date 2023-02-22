import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBg62g7XFRCQ6h8dZrSKEXtxsc0rHvt6Bk",
  authDomain: "chat-gpt-d5a4d.firebaseapp.com",
  projectId: "chat-gpt-d5a4d",
  storageBucket: "chat-gpt-d5a4d.appspot.com",
  messagingSenderId: "562993038461",
  appId: "1:562993038461:web:17b32b149f7c17f87d5d14",
  measurementId: "G-VRM2SX70VC",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
