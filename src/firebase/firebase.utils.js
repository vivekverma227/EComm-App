import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBV_5ApTP98Wj7NqS118E40pvYU6xtxd70",
  authDomain: "ecomm-app-db.firebaseapp.com",
  databaseURL: "https://ecomm-app-db.firebaseio.com",
  projectId: "ecomm-app-db",
  storageBucket: "ecomm-app-db.appspot.com",
  messagingSenderId: "183533991154",
  appId: "1:183533991154:web:a1e4a1cca1db6657cf8c6b",
  measurementId: "G-45C1JLFZ50",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error while creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
