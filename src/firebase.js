// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV1AHI_dz_7z_Ir6hIuNa94L39HD3MdGw",
  authDomain: "northstvrs.firebaseapp.com",
  projectId: "northstvrs",
  storageBucket: "northstvrs.appspot.com",
  messagingSenderId: "867672803336",
  appId: "1:867672803336:web:315d3cc5220ef9da6429bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;