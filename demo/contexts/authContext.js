import React, { Component, useState, useContext } from "react";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginSuccess,
        setLoginSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
