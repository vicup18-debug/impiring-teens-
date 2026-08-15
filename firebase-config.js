// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// TODO: Replace the following with your app's Firebase project configuration
// See the instructions in firebase-setup-instructions.md
const firebaseConfig = {
  apiKey: "AIzaSyBAcTpoAs6udGRoQr5syiXDfrP8ANWW0VI",
  authDomain: "itif-website.firebaseapp.com",
  databaseURL: "https://itif-website-default-rtdb.firebaseio.com",
  projectId: "itif-website",
  storageBucket: "itif-website.firebasestorage.app",
  messagingSenderId: "460280568669",
  appId: "1:460280568669:web:e9bfcd77db58d4789fe6b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
