import firebase from 'firebase/compat/app';
import "firebase/compat/database"

let firebaseConfig = {
    apiKey: "AIzaSyDSnUL17LAW3DdOh9EOroUboL13SnPtWkQ",

    authDomain: "app-cap-fba02.firebaseapp.com",
  
    projectId: "app-cap-fba02",
  
    storageBucket: "app-cap-fba02.appspot.com",
  
    messagingSenderId: "665275658802",
  
    appId: "1:665275658802:web:ea5a33353a65c9421f822b"
  
  
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

