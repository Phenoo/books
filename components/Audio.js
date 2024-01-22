import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "./StyledText";
import useBookSearch from "../api";
import Card from "./Card";
import MyLoader from "./Loader";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";

// import Colors from "@/constants/Colors";

// Bottom sheet that wraps our Listings component
const Audio = () => {
  const snapPoints = useMemo(() => ["35%", "50%"], []);
  const bottomSheetRef = useRef(null);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{ backgroundColor: "#111" }}
      style={styles.sheetContainer}
    >
      <View style={styles.contentContainer}>
        <StyledText
          style={{ fontFamily: "semibold", textAlign: "center", fontSize: 20 }}
        >
          Chapter 1
        </StyledText>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv1vr_hd_e77348kAQEJ9ZVzx8nkFXou0Wg&usqp=CAU",
          }}
          style={{ height: 150, width: "100%", objectFit: "contain" }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons name="translate" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons name="rewind-10" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <AntDesign name="pause" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <MaterialCommunityIcons
              name="fast-forward-10"
              size={18}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <MaterialIcons name="repeat-one" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#fff",
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "center",
    borderWidth: 1,
  },
  sheetContainer: {
    backgroundColor: "#fff",
    borderStartStartRadius: 100,
    borderStartEndRadius: 100,
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
});

export default Audio;
