import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAM83xxN7QENu36w3_WFYM2suMuJEd9c8k',
  authDomain: 'moneytracker-e9a03.firebaseapp.com',
  projectId: 'moneytracker-e9a03',
  storageBucket: 'moneytracker-e9a03.appspot.com',
  messagingSenderId: '665298393366',
  appId: '1:665298393366:web:64871c77bac83e81449837',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
