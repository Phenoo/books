import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "./StyledText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="view-dashboard-outline" size={24} />
      </TouchableOpacity>
      <View style={styles.headerwin}>
        <Ionicons name="star" />
        <StyledText style={{ lineHeight: 25, fontFamily: "bold" }}>
          Sami Text
        </StyledText>
        <StyledText
          style={{ lineHeight: 25, fontFamily: "bold", color: "gray" }}
        >
          433 points
        </StyledText>
      </View>
      <TouchableOpacity>
        <Ionicons name="globe" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerwin: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    marginTop: -30,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
