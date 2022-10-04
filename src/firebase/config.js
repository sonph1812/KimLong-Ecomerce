import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDj6fUy6r1MFHDo86yVRVqFSOiI1MNMwyE",
    authDomain: "ecomerce-2fa9c.firebaseapp.com",
    projectId: "ecomerce-2fa9c",
    storageBucket: "ecomerce-2fa9c.appspot.com",
    messagingSenderId: "299553585639",
    appId: "1:299553585639:web:5e199c5984c9b9ae5f6542",
    measurementId: "G-SFBHGWWQXN"
};

;
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage, app };