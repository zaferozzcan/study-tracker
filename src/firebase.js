import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2JgS3o9L6oxp_5BkhIilpVX8HuLUv-nI",
  authDomain: "study-tracker-aacc2.firebaseapp.com",
  projectId: "study-tracker-aacc2",
  storageBucket: "study-tracker-aacc2.appspot.com",
  messagingSenderId: "133241954634",
  appId: "1:133241954634:web:420dc26026a51d2e5c61b3",
  measurementId: "G-RJ1T1S1SBL",
};

// init firebase aap
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
