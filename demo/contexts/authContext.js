import React, { Component, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const loadStorageData = async (value) => {
    try {
      //Try get the data from Async Storage
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      if (email === "123" && password === "1234") {
        setLoginSuccess(true);
      } else {
        setLoginSuccess(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorageData function.
    loadStorageData();
  }, []);
  const checking = (email, pw) => {
    if (email === "123" && pw === "1234") {
      setLoginSuccess(true);
      AsyncStorage.setItem("email", "123");
      AsyncStorage.setItem("password", "1234");
    } else {
      setLoginSuccess(false);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("password");
      setLoginSuccess(false);
    } catch (error) {
      console.log(error);
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
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
