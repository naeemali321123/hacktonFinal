import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCXME1OZSikfrECHAexWHjOcmLnmHWsqQI",
  authDomain: "redux-toolkit-counter.firebaseapp.com",
  projectId: "redux-toolkit-counter",
  storageBucket: "redux-toolkit-counter.appspot.com",
  messagingSenderId: "989504736398",
  appId: "1:989504736398:web:a62e3ce9ad4951a2f94ddf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {db, auth, storage}

