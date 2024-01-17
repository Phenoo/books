import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StyledText } from "./StyledText";
import Colors from "../constants/Colors";

import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Card = ({ item, textColor, backgroundColor, index }) => {
  return (
    <View
      style={{
        marginVertical: 20,
        minHeight: 200,
        flexDirection: "row",
        gap: 20,
        position: "relative",
      }}
    >
      <View style={{ gap: 5, flex: 1 }}>
        <View>
          {item.volumeInfo?.categories?.map((category, i) => (
            <TouchableOpacity
              key={i}
              style={{
                width: 100,
                borderRadius: 15,
                // padding: 2.5,
                backgroundColor: Colors.grey,
              }}
            >
              <StyledText
                style={{
                  textAlign: "center",
                  fontSize: 8,
                  color: "white",
                  fontFamily: "regular",
                }}
              >
                {category}
              </StyledText>
            </TouchableOpacity>
          ))}
        </View>

        <View
          style={{
            backgroundColor: backgroundColor,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <View style={{ position: "absolute", right: 10, bottom: 0 }}>
            <Image
              source={{
                uri: item.volumeInfo.imageLinks
                  ? item.volumeInfo.imageLinks.smallThumbnail
                  : "https://bookslibraryreactjs.netlify.app/static/media/defaultBook.58a418ee.png",
              }}
              style={{ width: 120, height: 200 }}
              resizeMode="contain"
            />
          </View>

          <View style={{ width: width * 0.5 }}>
            <StyledText
              style={{
                fontFamily: "medium",
                fontSize: 14,
                // flex: 1,
                lineHeight: 30,
                color: textColor,
              }}
            >
              {item.volumeInfo.title}
            </StyledText>
            <View
              style={{
                // flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                // flex: 1,
              }}
            >
              <View>
                <StyledText
                  style={{
                    fontFamily: "regular",
                    fontSize: 12,
                    lineHeight: 20,
                    color: textColor,
                  }}
                >
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
                        lineHeight: 20,
                        fontSize: 12,
                        color: textColor,
                      }}
                    >
                      {author}
                    </StyledText>
                  ))}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // flex: 1,
              }}
            >
              <StyledText
                style={{
                  fontFamily: "semibold",
                  color: textColor,
                  fontSize: 20,
                  lineHeight: 40,
                }}
              >
                $ 35.7
              </StyledText>
              <View>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 30,
                    height: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    borderColor: textColor,
                  }}
                >
                  <Ionicons name="play" size={12} color={textColor} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* <View
        style={{ backgroundColor: "#111", height: 100, borderRadius: 15 }}
      ></View> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
