// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyDjy-cear3Fs_tLULDEMLHk4hhC4iEzveE",
  authDomain: "rose-bloom-dac9e.firebaseapp.com",
  projectId: "rose-bloom-dac9e",
  storageBucket: "rose-bloom-dac9e.firebasestorage.app",
  messagingSenderId: "867328423143",
  appId: "1:867328423143:web:55702afc68425d71155e42",
  measurementId: "G-7644VW50RZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

// ✅ Export the db
export { db };