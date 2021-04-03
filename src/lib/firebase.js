// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfYoAj62v5UvFBBOrXleaelOU_MXo8n3g",
  authDomain: "chirpy-chat.firebaseapp.com",
  projectId: "chirpy-chat",
  storageBucket: "chirpy-chat.appspot.com",
  messagingSenderId: "674524051243",
  appId: "1:674524051243:web:3ca8df388a99051946376e",
  measurementId: "G-RFPPT5NR5T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db; 