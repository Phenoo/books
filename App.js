import { useCallback } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import SignupScreen from "./screens/Signup";
import SigninScreen from "./screens/Signin";
import HomeScreen from "./screens/Home";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import SpecificPage from "./screens/SpecificPage";
import { MyDrawer } from "./components/Drawer";

// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={SpecificPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
      >
        <NavigationContainer>
          <StatusBar
            translucent={true}
            barStyle="light-content"
            backgroundColor={"transparent"}
          />
          <Root />
        </NavigationContainer>
      </PersistQueryClientProvider>
    </GestureHandlerRootView>
  );
}
