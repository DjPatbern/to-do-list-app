// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC7lBszKCs1j1xlNS4oThU8qS4GL9dbXo",
  authDomain: "todo-list-98c1d.firebaseapp.com",
  projectId: "todo-list-98c1d",
  storageBucket: "todo-list-98c1d.appspot.com",
  messagingSenderId: "37863729914",
  appId: "1:37863729914:web:b6e672d29d6e634f947743",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
