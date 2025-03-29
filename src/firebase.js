import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANg3JuC73G_hW5yfsd6oed97cFDVfoMZE",
  authDomain: "pickme-8b3ac.firebaseapp.com",
  projectId: "pickme-8b3ac",
  storageBucket: "pickme-8b3ac.firebasestorage.app",
  messagingSenderId: "1038146067034",
  appId: "1:1038146067034:web:92b6f51d47731d1e441663",
  measurementId: "G-CQNFXG4177"
  // apiKey: "AIzaSyBx8jIscqh-vJeHjgHLytOupjVWBENoLXU",
  // authDomain: "avi-backend-d89bc.firebaseapp.com",
  // projectId: "avi-backend-d89bc",
  // storageBucket: "avi-backend-d89bc.firebasestorage.app",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };
