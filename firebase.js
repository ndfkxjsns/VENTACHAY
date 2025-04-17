// firebase.js
import { initializeApp } from 'firebase/app';

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAg5z1F4Dx6z9x0VHrBc45gnzgBm0Sa65s",
  authDomain: "tc-1-81110.firebaseapp.com",
  databaseURL: "https://tc-1-81110-default-rtdb.firebaseio.com",
  projectId: "tc-1-81110",
  storageBucket: "tc-1-81110.firebasestorage.app",
  messagingSenderId: "1020958300613",
  appId: "1:1020958300613:web:0f95e201916b1c5ea153ac",
  measurementId: "G-8V0GYS69ZL"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Puedes exportar la instancia de la aplicación si la necesitas en otros archivos
export { app, firebaseConfig };
