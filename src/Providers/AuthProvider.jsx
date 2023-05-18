import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const providerGoogle = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign in with google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  const authInfo = {
    user,
    signInGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
