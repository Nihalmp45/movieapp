import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDi6_zZ8uo_fI8A8_v5MZHjNat1BNc9kCk",
  authDomain: "movie-app-5c811.firebaseapp.com",
  projectId: "movie-app-5c811",
  storageBucket: "movie-app-5c811.appspot.com",
  messagingSenderId: "943094916790",
  appId: "1:943094916790:web:ea83da43265a252928e817"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
export const db=getFireStore(app)