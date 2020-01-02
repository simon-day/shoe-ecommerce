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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user ', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
