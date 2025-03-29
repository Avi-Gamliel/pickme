import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyBx8jIscqh-vJeHjgHLytOupjVWBENoLXU",
  // authDomain: "avi-backend-d89bc.firebaseapp.com",
  // projectId: "avi-backend-d89bc",
  // storageBucket: "avi-backend-d89bc.firebasestorage.app",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };
