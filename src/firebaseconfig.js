import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

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
export const db=getFirestore(app)
export const auth=getAuth(app)