// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBftARJVB3Cq1jQoPXdb-ldF-_NEWnyO_8",
  authDomain: "tcservidor-b8874.firebaseapp.com",
  projectId: "tcservidor-b8874",
  storageBucket: "tcservidor-b8874.firebasestorage.app",
  messagingSenderId: "1033968746876",
  appId: "1:1033968746876:web:d75c3247adc32f785864f9",
  measurementId: "G-R7L2183KKD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

export { db }; // Exporta la instancia de Firestore
