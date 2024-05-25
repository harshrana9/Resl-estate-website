import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFFz6N1MEIQ3d5j5T9cJo47rYHiFNJdUo",
  authDomain: "endterm-a2cab.firebaseapp.com",
  projectId: "endterm-a2cab",
  storageBucket: "endterm-a2cab.appspot.com",
  messagingSenderId: "650346638014",
  appId: "1:650346638014:web:f1a27008bb13cc82abccef"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;