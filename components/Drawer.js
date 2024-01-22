import * as React from "react";
import {
  Button,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import SignupScreen from "../screens/Signup";
import Article from "../screens/Article";
import HomeScreen from "../screens/Home";
import Settings from "../screens/Settings";
import Premium from "../screens/Premium";
import Saved from "../screens/Saved";
import Edit from "../screens/Edit";
import Colors from "../constants/Colors";

import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "./StyledText";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.yellow }}>
      <DrawerContentScrollView
        {...props}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          justifyContent: "center",
          // alignItems: "center",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            backgroundColor: Colors.yellow,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.closeDrawer()}
            // onPress={() => navigation.closeDrawer()}
            style={{
              marginHorizontal: 20,
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <Octicons name="x" size={30} color="black" />
          </TouchableOpacity>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="exit-outline" size={22} />
            <StyledText
              style={{
                fontSize: 15,
                fontFamily: "regular",
                marginLeft: 5,
              }}
            >
              Sign Out
            </StyledText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width,
        },

        // drawerActiveBackgroundColor: "#aa18ea",
        drawerStatusBarAnimation: "fade",
        // drawerPosition: "right",
        drawerActiveTintColor: "#111",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          // marginLeft: -25,
          fontFamily: "semibold",
          textAlign: "center",
          fontSize: 25,
          height: 45,
          padding: 0,
        },
        // drawerType: "permanent",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        // options={{ header:   }}
      />
      <Drawer.Screen name="Article" component={Article} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Go Premium" component={Premium} />
      <Drawer.Screen name="Saved Books" component={Saved} />
      <Drawer.Screen name="Edit Profile" component={Edit} />
    </Drawer.Navigator>
  );
}
