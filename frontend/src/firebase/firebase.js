// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB3uNHF9_nW0XbMrZH3HaGsvVGpwQEV5rT0",
//   authDomain: "exam-evaluation-system-4bc7e.firebaseapp.com",
//   projectId: "exam-evaluation-system-4bc7e",
//   storageBucket: "exam-evaluation-system-4bc7e.firebasestorage.app",
//   messagingSenderId: "980623623631",
//   appId: "1:980623623631:web:e66f52eea5ed5eccd4feba",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Firebase Authentication
// export const auth = getAuth(app);

// // Google Provider
// export const googleProvider = new GoogleAuthProvider();

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyB3uNHF9_nW0XbMrZH3HagsvGpwQEV5rT0",
  authDomain: "exam-evaluation-system-4bc7e.firebaseapp.com",
  projectId: "exam-evaluation-system-4bc7e",
  storageBucket: "exam-evaluation-system-4bc7e.firebasestorage.app",
  messagingSenderId: "980623623631",
  appId: "1:980623623631:web:e66f52eea5ed5eccd4feba",
  measurementId: "G-1R95ZK51EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;