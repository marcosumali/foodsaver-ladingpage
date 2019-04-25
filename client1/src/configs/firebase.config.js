import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBLep6915qsa_DjmJ4Goev0op7JtMJqdsQ",
  authDomain: "foodsaver-app.firebaseapp.com",
  databaseURL: "https://foodsaver-app.firebaseio.com",
  projectId: "foodsaver-app",
  storageBucket: "foodsaver-app.appspot.com",
  messagingSenderId: "525352578809"
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
