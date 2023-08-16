import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuuu7EsGgw2Mv-igXyTl3DvSLBfbVCPHA",
  authDomain: "ecommerce-app-5ab9d.firebaseapp.com",
  projectId: "ecommerce-app-5ab9d",
  storageBucket: "ecommerce-app-5ab9d.appspot.com",
  messagingSenderId: "223128724281",
  appId: "1:223128724281:web:debd68db47102343533ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);