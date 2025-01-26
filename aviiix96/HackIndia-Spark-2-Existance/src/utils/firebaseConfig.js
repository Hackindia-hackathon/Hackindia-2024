import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCqD8eMZDiUYTfAH4y-e0CcT-3LULbG1pI",
    authDomain: "existance-b2e51.firebaseapp.com",
    projectId: "existance-b2e51",
    storageBucket: "existance-b2e51.appspot.com",
    messagingSenderId: "878135023594",
    appId: "1:878135023594:web:c8879e4d6fb85a51d68493",
    measurementId: "G-LMDQMDCWV4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };