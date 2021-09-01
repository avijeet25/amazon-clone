import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJjLDK3-pZR3bvUQOuIw1kcSIEzCbgESg",
  authDomain: "clone-fed26.firebaseapp.com",
  projectId: "clone-fed26",
  storageBucket: "clone-fed26.appspot.com",
  messagingSenderId: "698566883517",
  appId: "1:698566883517:web:6663643849f8b295021fd4",
  measurementId: "G-34SDNZBR65",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
