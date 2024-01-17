import { Text } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export function StyledText(props) {
  const { style, ...otherProps } = props;
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

  return <Text style={[style]} onLayout={onLayoutRootview} {...otherProps} />;
}
