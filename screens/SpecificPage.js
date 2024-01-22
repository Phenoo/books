import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useRef, useState } from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import useBookSearchSpecific from "../api/specific";
import HeaderDetails from "../components/HeaderDetails";
import { StyledText } from "../components/StyledText";

import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Audio from "../components/Audio";

const { width } = Dimensions.get("window");

const SpecificPage = ({ route }) => {
  const { item } = route.params;
  const snapPoints = useMemo(() => ["92%"], []);
  const bottomSheetRef = useRef(null);
  const [audio, setAudio] = useState(false);

  console.log(item.volumeInfo.imageLinks, "eze");
  return (
    <View
      style={{
        backgroundColor: Colors.green,
        flex: 1,
      }}
    >
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        handleIndicatorStyle={{ backgroundColor: "#111" }}
        style={styles.sheetContainer}
        handleComponent={HeaderDetails}
      >
        <View>
          <Pressable
            style={styles.imagecontainer}
            onPress={() => setAudio(!audio)}
          >
            <Image
              source={{
                uri: item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.thumbnail
                  : "https://bookslibraryreactjs.netlify.app/static/media/defaultBook.58a418ee.png",
              }}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
          <View
            style={{
              marginTop: 20,
              justifyContent: "space-between",
              flexDirection: "row",
              // alignItems: "center",
            }}
          >
            <View style={{ width: 250 }}>
              <StyledText
                style={{
                  fontFamily: "medium",
                  fontSize: 25,
                  // flex: 1,
                  lineHeight: 42,
                }}
              >
                {item.volumeInfo.title}
              </StyledText>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Ionicons name="bookmark-outline" size={18} color={"black"} />
            </TouchableOpacity>
          </View>
          <StyledText style={{ fontFamily: "regular", marginTop: -10 }}>
            {item.volumeInfo.subtitle}
          </StyledText>

          <View style={{ flexDirection: "row", gap: 5, marginTop: -10 }}>
            <View>
              <StyledText style={{ fontFamily: "medium", fontSize: 16 }}>
                By:
              </StyledText>
            </View>
            <View style={{}}>
              {item.volumeInfo?.authors
                ?.filter((value, i) => i < 1)
                .map((author, i) => (
                  <StyledText
                    key={i}
                    style={{
                      fontFamily: "regular",
                      // lineHeight: 20,
                      fontSize: 16,
                      color: "#808080",
                    }}
                  >
                    {author || "Anonymous"}
                  </StyledText>
                ))}
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 40 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Ionicons name="star" size={20} color={"orange"} />
              <StyledText style={{ fontFamily: "regular", fontSize: 16 }}>
                4.5 (2412)
              </StyledText>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <FontAwesome name="commenting-o" size={20} color="red" />
              <StyledText style={{ fontFamily: "regular", fontSize: 16 }}>
                350+ Reviews
              </StyledText>
            </View>
          </View>

          <View style={styles.center}>
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <StyledText style={{ fontSize: 30, fontFamily: "semibold" }}>
                $ 45.00
              </StyledText>
            </View>
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <TouchableOpacity style={styles.buybtn}>
                <StyledText style={styles.btnText}>Buy Now</StyledText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
      {audio && <Audio />}
    </View>
  );
};

export default SpecificPage;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  absoluteView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#111",
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "center",
  },
  sheetContainer: {
    backgroundColor: "#fff",
    borderStartStartRadius: 200,
    borderStartEndRadius: 200,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    paddingHorizontal: 20,
  },
  imagecontainer: {
    // flex: 1,
    marginTop: 30,
    width,
    justifyContent: "center",
    alignContent: "center",
    height: 380,
  },
  image: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
    marginLeft: -20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  buybtn: {
    backgroundColor: Colors.green,
    color: "#111",
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "semibold",
    fontSize: 18,
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
    marginTop: 20,
  },
});
