import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCZpAQyExCuENk_2RFAVZ2BLwXCiqj7bMQ",
//   authDomain: "react-drawer.firebaseapp.com",
//   databaseURL: "https://react-drawer.firebaseio.com",
//   projectId: "react-drawer",
//   storageBucket: "react-drawer.appspot.com",
//   messagingSenderId: "796755797467"
// };

const config = {
  apiKey: "AIzaSyCIh0d7O0MJRaJiXp_vBxxwBM-YdR6FbOU",
  authDomain: "mycrwn-db-1fe39.firebaseapp.com",
  databaseURL: "https://mycrwn-db-1fe39.firebaseio.com",
  projectId: "mycrwn-db-1fe39",
  storageBucket: "mycrwn-db-1fe39.appspot.com",
  messagingSenderId: "305046220015",
  appId: "1:305046220015:web:9c733253381080b1b93f1a",
  measurementId: "G-8HSM7SG7F6"
};

firebase.initializeApp(config);
const storage = firebase.storage();

export { storage, firebase as default };
