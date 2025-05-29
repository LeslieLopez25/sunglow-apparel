// Initializes Firebase and provides utility functions for auth and Firebase database operations
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  UserCredential,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDc8DIFcAUQUAuRNaReoyPGapODD1a9f-o",
  authDomain: "sunglow-apparel-db.firebaseapp.com",
  projectId: "sunglow-apparel-db",
  storageBucket: "sunglow-apparel-db.firebasestorage.app",
  messagingSenderId: "44281498523",
  appId: "1:44281498523:web:fe3decee40c958cd40af3e",
};

const firebaseApp = initializeApp(firebaseConfig);

// Google provider setup
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// Batch add documents to a collection in Firestone
type ObjectToAdd = {
  title: string;
};

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

// Retrieve all category documents from Firestone
type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

type CategoryData = {
  imageUrl: string;
  items: CategoryItem[];
  title: string;
};

export const getCategoriesAndDocuments = async (): Promise<CategoryData[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as CategoryData
  );
};

// User creation and authentication helpers
export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation: AdditionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential | void> => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

// Auth state listener and session utility
export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
