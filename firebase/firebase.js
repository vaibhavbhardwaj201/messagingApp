import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "messaging-app-firebasse",
  storageBucket: "messaging-app-firebasse.appspot.com",
  messagingSenderId: "177803303108",
  appId: "1:177803303108:web:b8f5bb93bb0152c61ad191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getStorage(app)