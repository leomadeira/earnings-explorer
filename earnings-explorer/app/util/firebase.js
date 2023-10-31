// util/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCEu66vBkbx3HtPA1_vZylwSP9XlEWCQKc',
  authDomain: 'earnings-explorer-ee56e.firebaseapp.com',
  projectId: 'earnings-explorer-ee56e',
  storageBucket: 'earnings-explorer-ee56e.appspot.com',
  messagingSenderId: '378499796165',
  appId: '1:378499796165:web:d564248d386769659ab4ac',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
