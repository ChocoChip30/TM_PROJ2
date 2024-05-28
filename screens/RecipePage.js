import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground
} from "react-native";
import React from "react";

import { icons, images, SIZES, COLORS } from "../constants";
import { useNavigation } from "@react-navigation/native";

const RecipePage = (item) => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={images.account}
    style={{width: '100%', height: '100%'}}
      >
      <View
        style={{
          flexDirection: "row",
          top: "10%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RecipesHome");
          }}
        >
          <Image source={icons.back_arrow} tintColor={COLORS.thepink} />
        </TouchableOpacity>
        <View style={{ width: 300, margin: 10 }}>
          <Text
            style={{
              fontFamily: "Bodoni 72",
              fontSize: 30,
              fontWeight: "bold",
              color: COLORS.thepink,
              textShadowColor: "rgba(0, 0, 0, 0.2)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            {item.route.params.name}
          </Text>
        </View>
      </View>

      <ScrollView
        style={{
          top: "4%",
          borderRadius: SIZES.radius,
          padding: SIZES.padding,
          ...styles.shadow,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={item.route.params.image}
            style={{ borderRadius: SIZES.radius, ...styles.shadow }}
          />
          <View
            style={{
              backgroundColor: "pink",
              ...styles.shadow,
              borderRadius: SIZES.radius,
              padding: SIZES.padding,
              marginTop: 20,
            }}
          >
            <Text style={styles.largetext}>
              {item.route.params.description}
            </Text>

            <View style={{ paddingTop: 30}}>
              <Text style={{fontWeight: 'bold', color: COLORS.thegreen}}>Ingredients</Text>
              <Text style={styles.smalltext}>
                {item.route.params.ingredients}
              </Text>
            </View>
            <View style={{ paddingTop: 30}}>
            <Text style={{fontWeight: 'bold', color: COLORS.thegreen}}>Method</Text>
              <Text style={styles.smalltext}>
                {item.route.params.instructions}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 200 }}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecipePage;

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
  smalltext: {
    fontFamily: "Optima-ExtraBlack",
    fontSize: 14,
    fontWeight: "bolder",
    color: COLORS.thegreen,
    marginTop: 10,
  },
  largetext: {
    fontFamily: "Optima-ExtraBlack",
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.thegreen,
    marginTop: 10,
  },
});
