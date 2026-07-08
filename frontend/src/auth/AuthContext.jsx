import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {logout as firebaseLogout,verifyMentor,} from "./authService";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [mentor, setMentor] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {

      if (!currentUser) {
        setUser(null);
        setMentor(null);
        setLoading(false);
        return;
      }

      try {
        setUser(currentUser);

        const response = await verifyMentor(currentUser);

        if (response.success) {
          setMentor(response.mentor);
        } else {
          setMentor(null);
        }

      } catch (error) {
        console.error(error);
        setMentor(null);
      }

      setLoading(false);

    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {

    await firebaseLogout();

    setUser(null);

    setMentor(null);

  };

  return (

    <AuthContext.Provider
      value={{
        user,
        mentor,
        setMentor,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>

  );

};

export const useAuth = () => {

  return useContext(AuthContext);

};
