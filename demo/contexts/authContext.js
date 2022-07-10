import React, { Component, useState, useContext } from "react";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const checking = (email, pw) => {
    if (email === "123" && pw === "1234") {
      setLoginSuccess(true);
    } else {
      setLoginSuccess(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginSuccess,
        setLoginSuccess,
        checking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
