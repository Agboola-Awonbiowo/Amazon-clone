import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVck_LHdrogaYqEeMJ1MggyC78g4GQJcA",
  authDomain: "challenge-ec662.firebaseapp.com",
  databaseURL: "https://challenge-ec662.firebaseio.com",
  projectId: "challenge-ec662",
  storageBucket: "challenge-ec662.appspot.com",
  messagingSenderId: "380350548667",
  appId: "1:380350548667:web:c4a4726a48c67f2764b79e",
  measurementId: "G-T0K90DXBWE",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };