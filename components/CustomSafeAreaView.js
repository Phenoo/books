import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

const CustomSafeAreaView = ({ style, children }) => {
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

  if (Platform.OS === "ios") {
    return (
      <SafeAreaView
        style={[styles.container, style]}
        onLayout={onLayoutRootview}
      >
        {children}
      </SafeAreaView>
    );
  } else {
    return <View style={[styles.androidContainer, style]}>{children}</View>;
  }
};

export default CustomSafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidContainer: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0, // Adjust the marginTop as needed
  },
});
