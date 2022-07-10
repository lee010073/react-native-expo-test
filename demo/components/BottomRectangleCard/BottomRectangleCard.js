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
import Carousel from "react-native-anchor-carousel";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomRectangleCard = ({ item, index }, ref) => {
  const { image, title, points, days } = item;
  return (
    <View
      style={{
        alignItems: "flex-start",
        backgroundColor: "white",
        width: 200,
        height: 350,
      }}
    >
      <Pressable
        activeOpacity={1}
        style={styles.item2}
        onPress={() => {
          ref.current.scrollToIndex(index);
        }}
      >
        <View style={{ flexDirection: "column", marginTop: 10, flex: 1 }}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <Image style={{ height: 80 }} source={{ uri: image }} />
            <Text style={{ marginTop: 10, fontWeight: "500", fontSize: 12 }}>
              {title}
            </Text>
            <Text style={{ marginTop: 10, fontWeight: "300", fontSize: 12 }}>
              {days} Days left
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 14 }}>
            Earn Up to <Text style={{ color: "blue" }}>{points}</Text> point
          </Text>
          <Ionicons
            style={{ marginLeft: 30 }}
            name="arrow-forward"
            size={20}
            color="red"
          />
        </View>
      </Pressable>
    </View>
  );
};

export default forwardRef(BottomRectangleCard);

const styles = StyleSheet.create({});
