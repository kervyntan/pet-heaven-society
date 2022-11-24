
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIq6Zl13p_xURyu380UE6rnsBx7TcmWV4",
  authDomain: "pet-heaven-society-34c69.firebaseapp.com",
  projectId: "pet-heaven-society-34c69",
  storageBucket: "pet-heaven-society-34c69.appspot.com",
  messagingSenderId: "949839640848",
  appId: "1:949839640848:web:0885ed68c467cea4ae4d95"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export { db, auth, storage };