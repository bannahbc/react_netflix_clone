// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiAXz8CKc1Qxy0FN1XcAQGmWRbr7RmL_g",
  authDomain: "netflix-clone-5ce80.firebaseapp.com",
  projectId: "netflix-clone-5ce80",
  storageBucket: "netflix-clone-5ce80.appspot.com",
  messagingSenderId: "469312282353",
  appId: "1:469312282353:web:3a4d40ded2e31f7e9cd350",
  measurementId: "G-3JWQX045WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


// Functions

const signup =async (name,email,password)=>{
    try {
        const response =  await createUserWithEmailAndPassword(auth,email,password)
        const user = response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvide:"local",
            email,

        })
    } catch (error) {
  
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login =async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = ()=>{
    signOut(auth)
}
export {auth,db,login,logout,signup}