import { View, Text } from "react-native";
import React from "react";

const Input = () => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={setEmail}
      value={email}
      placeholder="email"
      keyboardType="email-address"
    />
  );
};

export default Input;
