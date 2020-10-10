import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNIQV155ZEdQNqywJNuR7TEa588i9AZsw",
  authDomain: "instagram-clone-995e0.firebaseapp.com",
  databaseURL: "https://instagram-clone-995e0.firebaseio.com",
  projectId: "instagram-clone-995e0",
  storageBucket: "instagram-clone-995e0.appspot.com",
  messagingSenderId: "977220452546",
  appId: "1:977220452546:web:746a2825d725e40e4e3b5b",
  measurementId: "G-VVGFFPEEVL",
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
