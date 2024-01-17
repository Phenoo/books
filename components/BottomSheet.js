import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useMemo, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { StyledText } from "./StyledText";
import useBookSearch from "../api";
import Card from "./Card";
import MyLoader from "./Loader";
// import Colors from "@/constants/Colors";

// Bottom sheet that wraps our Listings component
const BottomSheetComponent = ({ category }) => {
  const snapPoints = useMemo(() => ["47%", "75%", "100%"], []);
  const bottomSheetRef = useRef(null);
  const [refresh, setRefresh] = useState(0);

  const { data, isLoading } = useBookSearch(category);

  const cardColors = [
    { background: "#FF5733", text: "white" },
    { background: "#33FF57", text: "black" },
    { background: "#5733FF", text: "white" },
    { background: "#FFD700", text: "black" },
    { background: "#8A2BE2", text: "white" },
    { background: "#00CED1", text: "black" },
    { background: "#FF6347", text: "white" },
    { background: "#00FF00", text: "black" },
    { background: "#1E90FF", text: "white" },
    { background: "#FF8C00", text: "black" },
  ];

  console.log(isLoading, "Loading category");

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{ backgroundColor: "#111" }}
      style={styles.sheetContainer}
    >
      <View style={styles.contentContainer}>
        {isLoading ? (
          <View>
            <MyLoader />
          </View>
        ) : (
          <FlatList
            data={data.items}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Card
                item={item}
                backgroundColor={
                  cardColors[index % cardColors.length].background
                }
                textColor={cardColors[index % cardColors.length].text}
                index={index}
              />
            )}
          />
        )}
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  absoluteView: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#111",
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    marginHorizontal: "auto",
    alignItems: "center",
  },
  sheetContainer: {
    backgroundColor: "#fff",
    borderStartStartRadius: 100,
    borderStartEndRadius: 100,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    padding: 20,
  },
});

export default BottomSheetComponent;
