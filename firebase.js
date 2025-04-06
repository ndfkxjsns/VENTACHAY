// ▼ Importa los servicios de Firebase que necesitas (SDK v10+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ▼ Configuración de tu proyecto (¡cambia estos valores por los tuyos!)
const firebaseConfig = {
  apiKey: "AIzaSyAg5z1F4Dx6z9x0VHrBc45gnzgBm0Sa65s",
  authDomain: "tc-1-81110.firebaseapp.com",
  projectId: "tc-1-81110",
  storageBucket: "tc-1-81110.appspot.com",
  messagingSenderId: "1020958300613",
  appId: "1:1020958300613:web:0f95e201916b1c5ea153ac"
};

// ▼ Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ▼ Función para enviar comandos a Firestore (accesible desde HTML)
window.enviarComando = async (accion) => {
  try {
    await setDoc(doc(db, "comandos", "ultimo"), {
      accion: accion,
      fecha: new Date(),
      estado: "pendiente"
    });
    console.log("🔥 Comando enviado:", accion);
  } catch (error) {
    console.error("❌ Error enviando comando:", error);
  }
};
