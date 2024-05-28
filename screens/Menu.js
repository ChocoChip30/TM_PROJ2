import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { COLORS, drinkData } from "../constants";

import ListItems from "../components/ListItems";

const Menu = () => {
  const [allDrinks, setAllDrinks] = React.useState(drinkData.AllDrinks);

  return (
    <SafeAreaView
    //   style={{
    //     backgroundColor: COLORS.thegreen,
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    >
      <View
        style={{
          width: "100%",
          height: 140,
          //flex:1,
          alignItems: "center",
          ...styles.shadow,
          backgroundColor: COLORS.thepink,
          borderBottomColor: COLORS.lightyellow,
          borderBottomWidth: 10,
          position: "absolute",
        }}
      >
        <Text
          style={{
            fontFamily: "Didot-Bold",
            fontSize: 40,
            fontWeight: "bold",
            color: COLORS.white,
            textShadowColor: "rgba(0, 0, 0, 0.5)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            top: "40%",
          }}
        >
          DRINKS
        </Text>
      </View>
      <View style={{ top: "12.5%", paddingBottom: 180}}>
        <ListItems data={allDrinks} />
      </View>
      
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
