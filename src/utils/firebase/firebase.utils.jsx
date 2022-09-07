import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDc8DIFcAUQUAuRNaReoyPGapODD1a9f-o",
  authDomain: "sunglow-apparel-db.firebaseapp.com",
  projectId: "sunglow-apparel-db",
  storageBucket: "sunglow-apparel-db.appspot.com",
  messagingSenderId: "44281498523",
  appId: "1:44281498523:web:fe3decee40c958cd40af3e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
