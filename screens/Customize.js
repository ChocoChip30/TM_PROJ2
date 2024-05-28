import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, icons, images, drinkData } from "../constants";
import CustomizeList from "../components/CustomizeList";
import Button from "../components/Button";

const Customize = () => {
  const navigation = useNavigation()

  const [custom, setCustom] = useState(drinkData.Customize);

  const [activeBase, setActiveBase] = useState({"id": 0, "name": "None"})
  const [activeMilks, setActiveMilks] = useState({"id": 0, "name": "None"})
  const [activeJuice, setActiveJuice] = useState({"id": 0, "name": "None"})
  const [activeFruit, setActiveFruit] = useState({"id": 0, "name": "None"})
  const [activeFlavors, setActiveFlavors] = useState({"id": 0, "name": "None"})
  const [activeToppings, setActiveToppings] = useState({"id": 0, "name": "None"})

  const base = custom.base;
  const milks = custom.milks;
  const juices = custom.Juices;
  const fruit = custom.Fruit_add;
  const flavors = custom.Flavors;
  const toppings = custom.Toppings;


  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: 140,
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
          CREATE
        </Text>
      </View>
      <ScrollView style={{ top: 100 }} showsVerticalScrollIndicator={false}>
        <View style={{ ...styles.viewStyle, ...styles.shadow }}>
          <Text style={styles.eachBoxTitle}>Base Drink</Text>
          <CustomizeList data={base} active={activeBase} setActive={setActiveBase}/>
        </View>
        <View style={{ ...styles.viewStyle, ...styles.shadow }}>
          <Text style={styles.eachBoxTitle}>Milk Types</Text>
          <CustomizeList data={milks} active={activeMilks} setActive={setActiveMilks}/>
        </View>
        <View style={{ ...styles.viewStyle, ...styles.shadow }}>
          <Text style={styles.eachBoxTitle}>Juice Types</Text>
          <CustomizeList data={juices} active={activeJuice} setActive={setActiveJuice}/>
        </View>
        <View style={{ ...styles.viewStyle, ...styles.shadow }}>
          <Text style={styles.eachBoxTitle}>Fruit Add-ins</Text>
          <CustomizeList data={fruit} active={activeFruit} setActive={setActiveFruit}/>
        </View>
        <View style={{ ...styles.viewStyle, ...styles.shadow }}>
          <Text style={styles.eachBoxTitle}>Flavors</Text>
          <CustomizeList data={flavors}  active={activeFlavors} setActive={setActiveFlavors}/>
        </View>
        <View style={{ ...styles.viewStyle, ...styles.shadow }}>
          <Text style={styles.eachBoxTitle}>Toppings</Text>
          <CustomizeList data={toppings} active={activeToppings} setActive={setActiveToppings}/>
        </View>
        <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
        <Button label="Add to Order" onPress={()=>{
          const data = {
            base: activeBase,
            milks : activeMilks,
            juices: activeJuice,
            fruit: activeFruit,
            flavors: activeFlavors,
            toppings: activeToppings
          }
            navigation.navigate("Order", data)
          }}/>
        </View>
        <View style={{ height: 200 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Customize;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  viewStyle: {
    backgroundColor: COLORS.thegreen,
    width: "95%",
    borderRadius: 7,
    margin: 5,
    //flex: 1,
    alignSelf: "center",
    padding: 10,
    //position: "absolute"
  },
  yellowContainers: (active, item) => ({
    backgroundColor: active === item ? COLORS.lightpink : COLORS.lightyellow,
    padding: 4,
    margin: 4,
    borderRadius: 5,
  }),
  eachBoxTitle: {
    color: COLORS.white,
    fontSize: 25,
    padding: 2,
    margin: 4,
    fontFamily: "Didot-Bold",
    fontWeight: "bold",
  },
  listText: {
    padding: 2,
    fontFamily: "Optima-ExtraBlack",
    fontWeight: "bolder",
    paddingLeft: 10,
  },
});
