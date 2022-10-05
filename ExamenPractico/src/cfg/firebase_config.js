import { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: Constants.manifest.extras.apiKey,
  authDomain: Constants.manifest.extras.authDomain,
  projectId: Constants.manifest.extras.projectId,
  storageBucket: Constants.manifest.extras.storageBucket,
  messagingSenderId: Constants.manifest.extras.messagingSenderId,
  appId: Constants.manifest.extras.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()