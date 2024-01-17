import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import Colors from "../constants/Colors";

import { Ionicons } from "@expo/vector-icons";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const SigninScreen = ({ navigation }) => {
  const [fontsLoaded, error] = useFonts({
    regular: require("../assets/fonts/InknutAntiqua-Regular.ttf"),
    semibold: require("../assets/fonts/InknutAntiqua-SemiBold.ttf"),
    medium: require("../assets/fonts/InknutAntiqua-Medium.ttf"),
    bold: require("../assets/fonts/InknutAntiqua-Bold.ttf"),
    black: require("../assets/fonts/InknutAntiqua-Black.ttf"),
  });

  const onLayoutRootview = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootview}>
      <View
        style={{
          backgroundColor: "#fdfff0",
          flex: 1,
          marginTop: 40,
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "#fff", padding: 15, borderRadius: 30 }}
          >
            <Ionicons name="chevron-back" size={20} />
          </TouchableOpacity>
          <Text style={styles.text}>Log In</Text>
          <View></View>
        </View>

        <View style={{ marginTop: 50 }}>
          <Text style={styles.hero}>Enter Your </Text>
          <Text style={styles.hero}>Details To Log In </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: 30,
          }}
        >
          <View style={{ marginTop: 30, gap: 20 }}>
            <Pressable
              style={{
                backgroundColor: "#fff",
                borderColor: "#8B9890",
                borderWidth: 1,
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
                padding: 5,
                paddingHorizontal: 10,
              }}
            >
              <Ionicons name="mail-outline" size={20} color={Colors.grey} />
              <TextInput
                placeholder="Enter your email"
                keyboardType="email-address"
                style={{ padding: 1, paddingLeft: 10, fontFamily: "regular" }}
              />
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#fff",
                borderColor: "#8B9890",
                borderWidth: 1,
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
                padding: 5,
                paddingHorizontal: 10,
              }}
            >
              <Ionicons name="lock-closed" size={20} color={Colors.grey} />
              <TextInput
                placeholder="Enter your password"
                keyboardType="visible-password"
                style={{ padding: 1, paddingLeft: 10, fontFamily: "regular" }}
              />
            </Pressable>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "medium",
                }}
              >
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
    flex: 1,
    paddingTop: 34,
    // paddingHorizontal: 20,
  },
  text: {
    fontFamily: "medium",
    fontSize: 16,
  },
  hero: {
    fontFamily: "medium",
    fontSize: 35,
    lineHeight: 57,
  },
  btn: {
    backgroundColor: Colors.green,
    color: "#111",
    borderRadius: 20,
  },
  btnText: {
    fontSize: 18,
    fontFamily: "medium",
    textAlign: "center",
  },
});
