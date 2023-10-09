// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFVyFKv5ZIlwCCxbR2H85J_EajG2qnYY",
  authDomain: "education-exp-firebase-project.firebaseapp.com",
  projectId: "education-exp-firebase-project",
  storageBucket: "education-exp-firebase-project.appspot.com",
  messagingSenderId: "866331248803",
  appId: "1:866331248803:web:6aa2332ad7e271abfdd716"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth