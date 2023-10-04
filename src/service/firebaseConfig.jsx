import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYfNOUrNRYL54saMHsTIhyVWubkmR9i_s",
  authDomain: "ecoweather-d0887.firebaseapp.com",
  projectId: "ecoweather-d0887",
  storageBucket: "ecoweather-d0887.appspot.com",
  messagingSenderId: "191436298297",
  appId: "1:191436298297:web:d48d349ef5c9395d3915e8",
  measurementId: "G-5B41XS35J6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);