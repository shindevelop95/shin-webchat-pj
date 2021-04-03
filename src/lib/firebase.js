// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf6L3noUiuZ1cxhe7WLnICCAtl7pDsTkg",
  authDomain: "chirpee-chat.firebaseapp.com",
  projectId: "chirpee-chat",
  storageBucket: "chirpee-chat.appspot.com",
  messagingSenderId: "523334297872",
  appId: "1:523334297872:web:7e79c04273caffa0db9d95",
  measurementId: "G-PZBH0WJE2T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db; 