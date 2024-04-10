// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9u1ydv0Z5wlDJC6VJN_x3Eq9yaNfHC1Q",
  authDomain: "jobfinder-5333c.firebaseapp.com",
  projectId: "jobfinder-5333c",
  storageBucket: "jobfinder-5333c.appspot.com",
  messagingSenderId: "946515869177",
  appId: "1:946515869177:web:065f9a45da49ccbc569128"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
