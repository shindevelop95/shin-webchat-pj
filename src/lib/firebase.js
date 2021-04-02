// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCO5Mh_24MOVTNiHVT09Yzet1izXThKcbU",
    authDomain: "chirpee-59619.firebaseapp.com",
    projectId: "chirpee-59619",
    storageBucket: "chirpee-59619.appspot.com",
    messagingSenderId: "1095267989971",
    appId: "1:1095267989971:web:a5b806fcc9ec1888cb1726",
    measurementId: "G-L2KEQZ3NEP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db; 