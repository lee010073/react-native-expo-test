import React, { useRef, useContext } from "react";
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
import { AuthContext } from "../contexts/authContext";
import TopRectangleCard from "../components/TopRectangleCard/TopRectangleCard";
import BottomRectangleCard from "../components/BottomRectangleCard/BottomRectangleCard";
import { data, data2 } from "../utils/HomeCardSampleData";
import HomeTitle from "../components/HomeTitle/HomeTitle";

const { width: windowWidth } = Dimensions.get("window");

const ITEM_WIDTH = 0.7 * windowWidth;
const ITEM2_WIDTH = 0.53 * windowWidth;
const SEPARATOR_WIDTH = 20;

export default function HomeScreen(props) {
  const { style } = props;
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);
  const context = useContext(AuthContext);

  function renderItem({ item, index }) {
    return <TopRectangleCard props={item} index={index} ref={carouselRef} />;
  }

  function renderItem2({ item, index }) {
    return <BottomRectangleCard item={item} index={index} ref={carouselRef2} />;
  }

  return (
    <ScrollView style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
      <HomeTitle words={"Assessment"} />
      <Carousel
        keyExtractor={(item) => item?.id}
        style={{}}
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
      <HomeTitle words={"Challenges"} />

      <Carousel
        keyExtractor={(item) => item?.id}
        style={{}}
        ref={carouselRef2}
        data={data2}
        renderItem={renderItem2}
        itemWidth={ITEM2_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
      <View style={{ marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>
        <TouchableOpacity
          style={{
            borderColor: "black",
            borderWidth: "1px solid black",
            borderRadius: "4px",
            padding: 10,
            backgroundColor: "black",
          }}
          onPress={() => context.signOut()}
        >
          <Text style={{ color: "white" }}>Logout @Remove Async Storage</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
