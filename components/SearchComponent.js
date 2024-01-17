import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const SearchComponent = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Pressable
        style={{
          borderColor: "#fff",
          borderBottomWidth: 1,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "space-between",
          padding: 5,
          paddingHorizontal: 10,
        }}
      >
        <Ionicons name="search" size={20} color={"#111"} />
        <TextInput
          placeholder="Search Any Books..."
          placeholderTextColor={"#111"}
          keyboardType="email-address"
          style={{ padding: 1, paddingHorizontal: 10, fontFamily: "regular" }}
        />
      </Pressable>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({});
