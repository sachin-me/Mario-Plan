 
 import firebase from "firebase/app";
 import 'firebase/firestore';
 import 'firebase/auth';
 
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBoN1p3QXPQXq0bhZwwnkHQ7ZZaCNFLMUc",
  authDomain: "mario-plan-c6ee2.firebaseapp.com",
  databaseURL: "https://mario-plan-c6ee2.firebaseio.com",
  projectId: "mario-plan-c6ee2",
  storageBucket: "mario-plan-c6ee2.appspot.com",
  messagingSenderId: "95745422672"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;