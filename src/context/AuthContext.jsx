import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase";



// create context
const AuthContext = createContext();

// provide context
export const AuthProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // sigin With Google
    const sigInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    // signout

    const logout = () => signOut(auth)


    const value = {
        currentUser,
        setCurrentUser,
        sigInWithGoogle,
        logout
    }

    // set Current User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe;
    }, []);


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
  
export const UserAuth = () =>{
    return useContext (AuthContext)
}