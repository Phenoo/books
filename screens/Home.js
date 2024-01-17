import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomSafeAreaView from "../components/CustomSafeAreaView";
import Colors from "../constants/Colors";
import Header from "../components/Header";
import Hero from "../components/Hero";
import DrawerExample from "../components/Drawer";
import BottomSheetComponent from "../components/BottomSheet";
import SearchComponent from "../components/SearchComponent";
import Categories from "../components/Categories";
import useBookSearch from "../api";

const HomeScreen = () => {
  const [category, setCategory] = useState("Today");

  return (
    <View style={{ backgroundColor: Colors.green, flex: 1 }}>
      <View style={{ padding: 15, flex: 1, marginTop: 40 }}>
        <Header />
        {/* <DrawerExample /> */}
        <Hero />
        <SearchComponent />
        <Categories category={category} setCategory={setCategory} />
        <BottomSheetComponent category={category} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
