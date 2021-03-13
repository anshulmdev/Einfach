import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNhvAOz7bhgCmhYsNlb9Eoyt7cOrqi5rU",
    authDomain: "hire-298805.firebaseapp.com",
    databaseURL: "https://hire-298805-default-rtdb.firebaseio.com",
    projectId: "hire-298805",
    storageBucket: "hire-298805.appspot.com",
    messagingSenderId: "71537495292",
    appId: "1:71537495292:web:c901afeb81444f7bc79b79"
}
// Initialize Firebase

// eslint-disable-next-line no-unused-vars
let app = null
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}

export const DB = firebase.database()

export default firebase