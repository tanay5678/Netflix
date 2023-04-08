import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "netflix-clone-4c755.firebaseapp.com",
  projectId: "netflix-clone-4c755",
  storageBucket: "netflix-clone-4c755.appspot.com",
  messagingSenderId: "884201742259",
  appId: "1:884201742259:web:d5b1cad7d2b75dc2b9b5c6",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth };

export default db;
