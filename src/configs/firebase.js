import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB6cCdUy4QcKwXkg68HSWRVCxPnhtLtGiQ",
  authDomain: "imoney-970d7.firebaseapp.com",
  projectId: "imoney-970d7",
  storageBucket: "imoney-970d7.appspot.com",
  messagingSenderId: "673739627069",
  appId: "1:673739627069:web:5a717ba81cddb68e3a2854",
  measurementId: "G-GG7MTVK9WV"
};
  firebase.initializeApp(firebaseConfig);
  
  const projectAuth = firebase.auth();
  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectAuth, projectStorage,projectFireStore,  timestamp};