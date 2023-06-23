// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy0rlc-Rez7v5hmDtA-bH86QKWfgxvQ0o",
  authDomain: "realtor-clone-react-bad2a.firebaseapp.com",
  projectId: "realtor-clone-react-bad2a",
  storageBucket: "realtor-clone-react-bad2a.appspot.com",
  messagingSenderId: "720186066295",
  appId: "1:720186066295:web:8f0d5ba322699171744d72"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()