import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXVcUEEvOxQSfOh1-3qdcwddbPLAeQutI",
  authDomain: "todo-crud-59f34.firebaseapp.com",
  projectId: "todo-crud-59f34",
  storageBucket: "todo-crud-59f34.appspot.com",
  messagingSenderId: "383948852864",
  appId: "1:383948852864:web:ef9a3aefdab80bee3de065",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
