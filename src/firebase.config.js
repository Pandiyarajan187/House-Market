// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApd0bZdeGAERcphOIXezwE874p-C36un0",
  authDomain: "house-marketplace-app-e7166.firebaseapp.com",
  projectId: "house-marketplace-app-e7166",
  storageBucket: "house-marketplace-app-e7166.appspot.com",
  messagingSenderId: "415112407764",
  appId: "1:415112407764:web:1c72a83da00d4f97b5a941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const db = getFirestore()