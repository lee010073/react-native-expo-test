import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeTitle = ({ words }) => {
  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <Text style={styles.name}>{words}</Text>
    </View>
  );
};

export default HomeTitle;

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1C2127",
  },
});
