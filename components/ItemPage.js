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
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

const ItemPage = (item) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate("Menu");
  };

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
        <TouchableOpacity onPress={handleBack}>
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
          //flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
        //stickyHeaderIndices={[0]}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={item.route.params.image}
            style={{ borderRadius: SIZES.radius, ...styles.shadow }}
          />
          <Button label="Add to Order" onPress={()=>{
            console.log("added to order")
          }}/>
          <View
            style={{
              backgroundColor: COLORS.lightyellow,
              ...styles.shadow,
              borderRadius: SIZES.radius,
              padding: SIZES.padding,
              marginTop: 10,
            }}
          >
            <Text
              style={styles.largetext}
            >
              {item.route.params.description}
            </Text>
            <Text
              style={styles.largetext}
            >
              $ {item.route.params.price}
            </Text>
            <View style={{ paddingTop: 20 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{fontWeight: 'bold', color: COLORS.gray}}>Calories</Text>
                <Text style={{fontWeight: 'bold', color: COLORS.gray}}>Sugar</Text>
                <Text style={{fontWeight: 'bold', color: COLORS.gray}}>Fat</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.smalltext}>
                  {item.route.params.calories} Kcal
                </Text>
                <Text style={styles.smalltext}>{item.route.params.sugar}g</Text>
                <Text style={styles.smalltext}>{item.route.params.fat}g</Text>
              </View>
            </View>
            <View style={{ paddingTop: 30 }}>
            <Text style={{fontWeight: 'bold', color: COLORS.gray}}>Ingredients</Text>
              <Text style={styles.smalltext}>
               {item.route.params.ingredients}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ height: 200 }}></View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ItemPage;

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
    color: COLORS.gray,
    marginTop: 10,
  },
  largetext: {
    fontFamily: "Optima-ExtraBlack",
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.thegreen,
    marginTop: 10,
  }
});
