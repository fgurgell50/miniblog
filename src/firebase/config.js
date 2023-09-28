import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU2NN4E8jRi2mto0Ip_O-Ysao-xXN-uwg",
  authDomain: "miniblog-d7fb0.firebaseapp.com",
  projectId: "miniblog-d7fb0",
  storageBucket: "miniblog-d7fb0.appspot.com",
  messagingSenderId: "803961903141",
  appId: "1:803961903141:web:57c1721d9292b8e18107cc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };