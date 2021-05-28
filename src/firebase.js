import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCajLdTBttaNOH9050oLV92UMD586vbxio",
  authDomain: "linkedin-clone-1779e.firebaseapp.com",
  projectId: "linkedin-clone-1779e",
  storageBucket: "linkedin-clone-1779e.appspot.com",
  messagingSenderId: "890923463058",
  appId: "1:890923463058:web:3e4055994a715aa735d14b",
  measurementId: "G-4Q9LV3LT0K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db };
