import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

// created context
export const AuthContext = createContext(null)

// social auth provider
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()


const FirebaseProvider = ({children}) => {

    // use state
    const [user, setUser] = useState(null)
    console.log(user)

    // create user method
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
      
    }

    // sign in user method
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        
      
    }

    // sign in with google popUp
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign in with gitHub popUp
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }

    // logout
    const logOut = () => {
        setUser(null)
        return signOut(auth);
    }




    // observer by onAuthState
    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          
    },[])

    // stored value to send in the children
    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logOut,
        user

    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;