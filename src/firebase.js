import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Navigate } from "react-router-dom";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCm2kz4sCDViMvURYG8DrekxWHewPk-JsE",
    authDomain: "cropyield-23d86.firebaseapp.com",
    projectId: "cropyield-23d86",
    storageBucket: "cropyield-23d86.appspot.com",
    messagingSenderId: "253446705078",
    appId: "1:253446705078:web:4876eab70da7a4e143fb17",
    measurementId: "G-2RQFS34BW3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}
export const db = getFirestore();

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  // console.log("hi",currentUser)

  return currentUser;
}
