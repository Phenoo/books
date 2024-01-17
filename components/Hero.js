import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StyledText } from "./StyledText";
import Colors from "../constants/Colors";

const Hero = () => {
  return (
    <View style={{ marginTop: 70 }}>
      <StyledText
        style={{ fontSize: 45, fontFamily: "semibold", lineHeight: 75 }}
      >
        The Most Popular Book
      </StyledText>

      <StyledText
        style={{
          color: "#111",
          marginTop: -25,
          fontSize: 14,
          fontFamily: "medium",
        }}
      >
        The Best Book Collections of all time.
      </StyledText>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({});
