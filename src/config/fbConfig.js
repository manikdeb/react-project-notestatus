import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDFVtrT9xcmeyv08zu8TAVZBysBT3h4OKM",
  authDomain: "reactreduxapp-48d2e.firebaseapp.com",
  databaseURL: "https://reactreduxapp-48d2e.firebaseio.com",
  projectId: "reactreduxapp-48d2e",
  storageBucket: "reactreduxapp-48d2e.appspot.com",
  messagingSenderId: "755408802618"
};
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
