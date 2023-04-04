import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
       const [user, setUser] = useState({});

    const createUser = (email, password) => {
         return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
      return signOut(auth);
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);

  return (
    <UserContext.Provider value={{createUser, logout, signIn, user}}>
        {children}
    </UserContext.Provider>
  )
}

export const User = () => {
    return useContext(UserContext)
}

