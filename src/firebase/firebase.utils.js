import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDaqpYwG6GBP7B7OvWeRa17hFkYJC0zGNI',
  authDomain: 'crown-clothing-db-6f381.firebaseapp.com',
  databaseURL: 'https://crown-clothing-db-6f381.firebaseio.com',
  projectId: 'crown-clothing-db-6f381',
  storageBucket: 'crown-clothing-db-6f381.appspot.com',
  messagingSenderId: '908132191370',
  appId: '1:908132191370:web:65e41f1dec4dac579f3173',
  measurementId: 'G-TS3HEK8S1X'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
