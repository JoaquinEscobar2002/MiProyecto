import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBS_API_KEY,
  authDomain: import.meta.env.VITE_FBS_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FBS_PROJET_ID,
  storageBucket: import.meta.env.VITE_FBS_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FBS_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FBS_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);