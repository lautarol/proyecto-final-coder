import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCyGNSe1EwAZnODXoaK1fPohGS8XwCnLgk",
  authDomain: "coder-back-8657b.firebaseapp.com",
  projectId: "coder-back-8657b",
  storageBucket: "coder-back-8657b.appspot.com",
  messagingSenderId: "56105368064",
  appId: "1:56105368064:web:309281b7a76ccc1684b6e5",
  measurementId: "G-FLLG6X9PLE"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
