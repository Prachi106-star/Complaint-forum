import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
 apiKey: "AIzaSyDE4cfZRHfo9o41Hugp0b8R4FMIENqe8YM",
 authDomain: "complaintforum-e3107.firebaseapp.com",
 projectId: "complaintforum-e3107",
 storageBucket: "complaintforum-e3107.appspot.com",
 messagingSenderId: "334370311739",
 appId: "1:334370311739:web:5c794adb49ad19aec3561e"

// Initialize Firebase

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

