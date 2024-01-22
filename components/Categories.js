import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StyledText } from "./StyledText";
import Colors from "../constants/Colors";

const Categories = ({ category, setCategory }) => {
  const items = [
    "Life",
    "Political",
    "Science",
    "Motivation",
    "Art",
    "Education",
  ];
  return (
    <View>
      <ScrollView horizontal style={{}} showsHorizontalScrollIndicator={false}>
        {items.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={{ marginRight: 20 }}
            onPress={() => setCategory(item)}
          >
            <StyledText
              style={{
                fontFamily: item === category ? "bold" : "medium",
                fontSize: 16,
                color: item === category ? "#fff" : "#292928",
                // borderWidth: item === category ? 1 : 0,
                // borderRadius: 10,
              }}
            >
              {item}
            </StyledText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
