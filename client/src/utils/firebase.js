
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-c827b.firebaseapp.com",
  projectId: "interviewiq-c827b",
  storageBucket: "interviewiq-c827b.firebasestorage.app",
  messagingSenderId: "259545126248",
  appId: "1:259545126248:web:7da4f63cdf8267454b32dd",
  measurementId: "G-898JBFS39F"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}