// creates an app instance
import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// web apps firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSE2Tkh7r4JgnZOfkJ2hnzzS5Tt5le2Iw",
  authDomain: "crwn-clothing-db-b8b7f.firebaseapp.com",
  projectId: "crwn-clothing-db-b8b7f",
  storageBucket: "crwn-clothing-db-b8b7f.appspot.com",
  messagingSenderId: "438738711805",
  appId: "1:438738711805:web:cb518b74baabf1c0bbba94",
  measurementId: "G-BR50BQ129M",
};

// initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

// sign in using a redirect
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// never need more than one authentication
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// store data we are getting from auth inside firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  // sees if there is an existing document reference
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
};
