
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDHIA_eUO-QhZnc_MgeAwJx3FsR1sNY2qg",
  authDomain: "fir-11abc.firebaseapp.com",
  databaseURL: "https://fir-11abc-default-rtdb.firebaseio.com",
  projectId: "fir-11abc",
  storageBucket: "fir-11abc.appspot.com",
  messagingSenderId: "491290198803",
  appId: "1:491290198803:web:25c9b2674b0305cac590e6",
  measurementId: "G-QDX1WWGDW7"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const database = getDatabase()
// const analytics = getAnalytics(app);
