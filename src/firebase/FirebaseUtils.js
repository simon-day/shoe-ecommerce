import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB3bSqUgdSEK5IAqdJI_rEosdlxBfA06oc',
  authDomain: 'shoe-store-1c788.firebaseapp.com',
  databaseURL: 'https://shoe-store-1c788.firebaseio.com',
  projectId: 'shoe-store-1c788',
  storageBucket: 'shoe-store-1c788.appspot.com',
  messagingSenderId: '413977220310',
  appId: '1:413977220310:web:515e58d03706bde1b22577'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
