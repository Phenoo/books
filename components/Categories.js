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
    "Today",
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
                fontFamily: "medium",
                fontSize: 16,
                color: item === category ? "#111" : Colors.grey,
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
