import React, { useRef } from "react";
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

const { width: windowWidth } = Dimensions.get("window");

const data = [
  {
    id: "item2",
    image: "https://i.imgur.com/N3nQ9CS.jpg",
    title: "Advanced Health Screening",
    url: "https://github.com/lehoangnam97/react-native-anchor-carousel",
    points: 1000,
  },
  {
    id: "item3",
    image: "https://i.imgur.com/AzdYlDM.jpg",
    title: "Title 2",
    url: "https://www.npmjs.com/package/react-native-anchor-carousel",
    points: 400,
  },
  {
    id: "item1",
    image: "https://i.imgur.com/s7GgEa8.jpg",
    title: "Title 3 ",
    url: "https://www.npmjs.com/package/react-native-anchor-carousel",
    points: 200,
  },
  {
    id: "item6",
    image: "https://i.imgur.com/1O1Kd6T.jpg",
    title: "Title 4",
    url: "https://github.com/lehoangnam97/react-native-anchor-carousel",
    points: 220,
  },
  {
    id: "item4",
    image: "https://i.imgur.com/eNuhvpN.jpg",
    title: "Modern sunglasses ",
    url: "https://github.com/lehoangnam97/react-native-anchor-carousel",
    points: 220,
  },

  {
    id: "item5",
    image: "https://i.imgur.com/jEiBmma.jpg",
    title: "Cigarettes pipe t",
    url: "https://www.npmjs.com/package/react-native-anchor-carousel",
    points: 20,
  },
];

const data2 = [
  {
    id: "item2",
    image: "https://i.imgur.com/N3nQ9CS.jpg",
    title: "Say no to sugar",
    url: "https://github.com/lehoangnam97/react-native-anchor-carousel",
    points: 20,
    days: 2,
  },
  {
    id: "item3",
    image: "https://i.imgur.com/AzdYlDM.jpg",
    title: "5km Challenge",
    url: "https://www.npmjs.com/package/react-native-anchor-carousel",
    points: 40,
    days: 6,
  },
  {
    id: "item1",
    image: "https://i.imgur.com/s7GgEa8.jpg",
    title: "10km Challenge",
    url: "https://www.npmjs.com/package/react-native-anchor-carousel",
    points: 20,
    days: 2,
  },
  {
    id: "item6",
    image: "https://i.imgur.com/1O1Kd6T.jpg",
    title: "Bottle Opener Lorem ipsum dolor sit amet",
    url: "https://github.com/lehoangnam97/react-native-anchor-carousel",
    points: 20,
    days: 2,
  },
  {
    id: "item4",
    image: "https://i.imgur.com/eNuhvpN.jpg",
    title: "Modern sunglasses",
    url: "https://github.com/lehoangnam97/react-native-anchor-carousel",
    points: 200,
    days: 5,
  },

  {
    id: "item5",
    image: "https://i.imgur.com/jEiBmma.jpg",
    title: "Cigarettes pipe ",
    url: "https://www.npmjs.com/package/react-native-anchor-carousel",
    points: 20,
    days: 4,
  },
];

const ITEM_WIDTH = 0.7 * windowWidth;
const ITEM2_WIDTH = 0.53 * windowWidth;
const SEPARATOR_WIDTH = 10;
export default function HomeScreen(props) {
  const { style } = props;
  const carouselRef = useRef(null);

  async function handleInstallNowClick(url) {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  function renderHeader(words) {
    return (
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Text style={styles.name}>{words}</Text>
      </View>
    );
  }

  function renderItem({ item, index }) {
    const { image, title, points, url } = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
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
                  marginTop: 10,
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
                Earn Up to{" "}
                <Text style={{ color: "blue", fontweight: "400" }}>
                  {points}
                </Text>{" "}
                point
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
    );
  }

  function renderItem2({ item, index }) {
    const { image, title, points, days } = item;
    return (
      <Pressable
        activeOpacity={1}
        style={styles.item2}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
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
            Earn Up to{" "}
            <Text style={{ color: "blue", fontweight: "400" }}>{points}</Text>{" "}
            point
          </Text>
          <Ionicons
            style={{ marginLeft: 30 }}
            name="arrow-forward"
            size={20}
            color="red"
          />
        </View>
      </Pressable>
    );
  }

  return (
    <ScrollView style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
      {renderHeader("Assessment")}
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
      {renderHeader("Challenges")}
      <Carousel
        keyExtractor={(item) => item?.id}
        style={{}}
        ref={carouselRef}
        data={data2}
        renderItem={renderItem2}
        itemWidth={ITEM2_WIDTH}
        separatorWidth={SEPARATOR_WIDTH}
        inActiveScale={1}
        inActiveOpacity={1}
        containerWidth={windowWidth}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DADEE1",
    alignItems: "flex-start",
    height: "auto",
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderColor: "#DADEE1",
  },
  carousel: {
    width: windowWidth,
    height: ITEM_WIDTH,
    flexGrow: 0,
  },
  item: {
    backgroundColor: "white",
    height: 100,
    borderRadius: 5,
    borderColor: "#EAECEE",

    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  item2: {
    backgroundColor: "white",
    width: 200,
    height: 350,
    borderRadius: 5,
    borderColor: "#EAECEE",

    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  image: {
    backgroundColor: "#EBEBEB",
  },
  lowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lowerLeft: {
    width: "50%",
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1C2127",
    marginTop: 4,
  },
  descriptionText: {
    fontSize: 14,

    color: "#A0A0A0",
  },
  button: {
    width: "40%",
    marginLeft: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: "#585B60",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#585B60",
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
    borderColor: "#A0A0A0",
    paddingHorizontal: 10,
  },
  logo: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1C2127",
  },
});
