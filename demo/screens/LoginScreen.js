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
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

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
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderWidth: "1px solid black",
            borderRadius: "4px",
            padding: 10,
          }}
          onPress={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <Text>Show modal</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View
          style={{
            height: 310,
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Text style={{ marginTop: 20, marginLeft: 12 }}>
            Email:123 (test)
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="email"
            keyboardType="email-address"
          />
          <Text style={{ marginLeft: 12 }}>Password:1234 (test)</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPw}
            value={pw}
            placeholder="password"
            keyboardType="default"
          />
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: "black",
                borderWidth: "1px solid black",
                borderRadius: "4px",
                padding: 10,
              }}
              onPress={() => {
                context.checking(email, pw);
              }}
            >
              <Text>Confirm Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                borderColor: "black",
                borderWidth: "1px solid black",
                borderRadius: "4px",
                padding: 10,
              }}
              onPress={() => setModalVisible(!isModalVisible)}
            >
              <Text>Hide modal</Text>
            </TouchableOpacity>
          </View>
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
