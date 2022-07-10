import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { Component, useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const LoginScreen = () => {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPw}
        value={pw}
        placeholder="password"
        keyboardType="default"
      />
      <TouchableOpacity onPress={() => context.checking(email, pw)}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
