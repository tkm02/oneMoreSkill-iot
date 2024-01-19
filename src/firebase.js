// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPup4Pblw2A_WtQLylDpYPbS6pqNgat3o",
  authDomain: "testonemoreskill.firebaseapp.com",
  databaseURL: "https://testonemoreskill-default-rtdb.firebaseio.com/",
  projectId: "testonemoreskill",
  storageBucket: "testonemoreskill.appspot.com",
  messagingSenderId: "640724703594",
  appId: "1:640724703594:web:c4873fb39e947dd8db2d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {app,database}
