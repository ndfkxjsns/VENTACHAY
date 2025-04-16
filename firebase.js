// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET.appspot.com",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID",
  measurementId: "TU_MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Obtén la instancia de Firestore

// Función para guardar un nuevo cliente (adaptada para la sintaxis modular)
window.guardarCliente = async (clienteData) => {
  try {
    clienteData.fechaCreacion = serverTimestamp();
    const docRef = await addDoc(collection(db, 'clientes'), clienteData);
    console.log('✅ Cliente guardado con ID:', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('❌ Error guardando cliente:', error);
    return { success: false, error: error.message };
  }
};

// (Otras funciones como enviarComando, etc., adaptadas si es necesario)
