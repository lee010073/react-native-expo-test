import React, { useRef, useContext, forwardRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Pressable,
  Linking,
  ScrollView,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TopRectangleCard = ({ props, index }, ref) => {
  const { image = "", title = "", points = 0 } = props;

  return (
    <View
      style={{
        backgroundColor: "white",
        height: 100,
        borderColor: "#DADEE1",
      }}
      ref={ref}
    >
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          ref.current.scrollToIndex(index);
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ marginLeft: 10 }}>
            <Image style={{ height: 80, width: 80 }} source={{ uri: image }} />
          </View>

          <View
            style={{
              marginLeft: 5,
              flexDirection: "column",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 12,
                  maxWidth: 150,
                }}
              >
                {title}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text style={{ fontSize: 11 }}>
                Earn Up to <Text style={{ color: "blue" }}>{points}</Text> point
              </Text>
              <Ionicons
                style={{ marginLeft: 30 }}
                name="arrow-forward"
                size={20}
                color="red"
              />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default forwardRef(TopRectangleCard);

const styles = StyleSheet.create({});
