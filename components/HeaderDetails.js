import { Share, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "./StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons";

const HeaderDetails = ({ listing }) => {
  const navigation = useNavigation();

  const shareListing = async () => {
    try {
      await Share.share({
        title: "The Emperor's Handbook",
        url: "http://play.google.com/books/reader?id=BJIa1iwWRbIC&hl=&source=gbs_api",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
        <Ionicons name="chevron-back" size={16} />
      </TouchableOpacity>
      <View>
        <StyledText style={{ lineHeight: 25, fontFamily: "bold" }}>
          Book Details
        </StyledText>
      </View>
      <TouchableOpacity style={styles.btn} onPress={shareListing}>
        <Ionicons name="share-outline" size={16} color={"#000"} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDetails;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
  },
  headerwin: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  btn: {
    backgroundColor: "rgba(27, 195, 84, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
});
