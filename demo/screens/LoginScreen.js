import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from "react-native";
import React, { Component, useState, useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import Modal from "react-native-modal";

const LoginScreen = () => {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (!!context.loginSuccess) {
      setModalVisible(false);
    }
  }, [context.loginSuccess]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={{ height: 200, backgroundColor: "white" }}>
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
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              context.checking(email, pw);
            }}
          >
            <Text>Confirm Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={toggleModal}
          >
            <Text>Hide modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
