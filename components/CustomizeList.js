import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES, icons, images, drinkData } from "../constants";

const CustomizeList = ({ data, active, setActive }) => {
  //const [activeBase, setActiveBase] = React.useState("None");

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.yellowContainers(active, item)}
          onPress={() => {
            setActive(item);
          }}
        >
          <Text
          style={[styles.tabText(active, item)]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item?.id}
      contentContainerStyle={{ columnGap: 8 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CustomizeList;

const styles = StyleSheet.create({
  yellowContainers: (active, item) => ({
    backgroundColor: active === item ? COLORS.thepink : COLORS.lightyellow,
    padding: 4,
    margin: 4,
    borderRadius: 5,
  }),
  tabText: (activeBase, item) => ({
    padding: 2,
    fontFamily: "Optima-ExtraBlack",
    fontWeight: "bolder",
    paddingLeft: 10,
    color: activeBase === item ? "white" : COLORS.thegreen,
    textShadowColor:
      activeBase === item ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  }),
});
