// creates an app instance
import { getApps, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// web apps firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsazPz1gIu4j_mAwA_ntF9QO49sfBx1-g",
  authDomain: "crwn-clothing-db-81bde.firebaseapp.com",
  projectId: "crwn-clothing-db-81bde",
  storageBucket: "crwn-clothing-db-81bde.appspot.com",
  messagingSenderId: "637138825930",
  appId: "1:637138825930:web:48217211c739ee6850ba33",
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
