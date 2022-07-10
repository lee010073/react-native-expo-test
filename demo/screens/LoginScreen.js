import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { Component, useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const LoginScreen = () => {
  const context = useContext(AuthContext);
  console.log(context, "this is context ");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login</Text>
      <TextInput />
      <TouchableOpacity onPress={() => context.setLoginSuccess(true)}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
