import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX0MgSVGgh0VsDcfHgEXFJjXrGZj6_Jdw",
  authDomain: "echoprep-78b85.firebaseapp.com",
  projectId: "echoprep-78b85",
  storageBucket: "echoprep-78b85.firebasestorage.app",
  messagingSenderId: "918702548833",
  appId: "1:918702548833:web:65be84b05fe683ebca8720",
  measurementId: "G-LMW7FYG55J"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);