// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBfPsplR-1rBGZ0jKSAfAde5vTdKrcROSo',
  authDomain: 'coder-react-flex.firebaseapp.com',
  projectId: 'coder-react-flex',
  storageBucket: 'coder-react-flex.firebasestorage.app',
  messagingSenderId: '1013956120831',
  appId: '1:1013956120831:web:a482704bfac7526d36fcca',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
