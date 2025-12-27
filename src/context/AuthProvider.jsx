import React from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const user = {
    name: "John Doe",
  };

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, password, email);
  };

  const AuthData = { user, createUser };
  return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default AuthProvider;
