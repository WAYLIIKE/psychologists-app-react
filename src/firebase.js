// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDz5vnOIOOojOA2yOXyGFxNSh1p4yeOyow',
  authDomain: 'psychologies-5d98d.firebaseapp.com',
  databaseURL:
    'https://psychologies-5d98d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'psychologies-5d98d',
  storageBucket: 'psychologies-5d98d.appspot.com',
  messagingSenderId: '894912660645',
  appId: '1:894912660645:web:155d03f99991765ca5f94c',
  measurementId: 'G-VE9HF6K36N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
