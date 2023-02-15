import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBn3ux8HL9CXmnYIwivyzuA4AfbUMqe0g0",
  authDomain: "olx-clone-eb3f6.firebaseapp.com",
  projectId: "olx-clone-eb3f6",
  storageBucket: "olx-clone-eb3f6.appspot.com",
  messagingSenderId: "50201236533",
  appId: "1:50201236533:web:4feffdbc1e78ddb1fe0d7c"
};

export const Firebase= firebase.initializeApp(firebaseConfig)