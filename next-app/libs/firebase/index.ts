// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsJPH0ZdwSC9iMPS3OSThpEaAx_4JGOA",
  authDomain: "salewebdev.firebaseapp.com",
  projectId: "salewebdev",
  storageBucket: "salewebdev.appspot.com",
  messagingSenderId: "228538220009",
  appId: "1:228538220009:web:2f842efa5a380e235f9f78",
  measurementId: "G-VMPFMXNFKZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const uploadImage = async (inputId, filePath: string) => {
  const storage = getStorage();

  // Create a reference to the file you want to upload
  const fileRef = ref(storage, filePath);

  // Upload file
  const element: any = document.getElementById(inputId);
  const file = element.files[0];
  await uploadBytes(fileRef, file);
};

const getImage = async (filePath: string) => {
  // Get a reference to the storage service
  const storage = getStorage();

  // Create a reference to the image you want to get
  const imageRef = ref(storage, filePath);

  // Get download URL
  const url = await getDownloadURL(imageRef);
};

export { app, auth, db, storage, getImage, uploadImage };
