import React, { useContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase"
const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();

  function signUp (email, password){
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      setCurrentUser(user);
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signUp
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
};

