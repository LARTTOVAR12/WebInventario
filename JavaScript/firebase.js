// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCNn8qTVfoUgVmDSLzbfga-7ppLSvOJwps",
  authDomain: "fb-inventario.firebaseapp.com",
  projectId: "fb-inventario",
  storageBucket: "fb-inventario.appspot.com",
  messagingSenderId: "290001981698",
  appId: "1:290001981698:web:7faa9ed5be07b8b802721b",
  measurementId: "G-HM94Q7BB3M"
};

// Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);