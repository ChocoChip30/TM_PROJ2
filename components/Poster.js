import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, icons, images, drinkData } from "../constants";
import { useNavigation } from "@react-navigation/native";

const Poster = () => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding * 4,
      }}
    >
      <Image source={images.homeImage} style={{ width: "100%", height: 800 }} />
      <TouchableOpacity
        style={{
          flex: 1,
          position: "absolute",
          top: "60%",
          left: "10%",
          backgroundColor: COLORS.lightyellow,
          borderRadius: SIZES.radius,
          padding: SIZES.padding,
          flexDirection: 'row',
          alignItems: 'center',
          ...styles.shadow
        }}
        onPress={()=>{
          navigation.navigate("RecipesHome")
        }}
      >
        <View style={{width: 180}}>
        <Text style={{flex: 1, flexWrap: 'wrap', fontSize: 20, fontWeight: 'bold', color: COLORS.thegreen}}>Make your favorite drinks at home</Text>
        </View>
        <Image source={icons.right_arrow} resizeMode="contain" style={{tintColor: COLORS.thepink}}/>
        
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          position: "absolute",
          top: "10%",
          right: "5%",
          alignItems: "center",
          justifyContent: "center",
          borderColor: 'white',
          borderWidth: 10,
          backgroundColor: COLORS.thepink,
          borderRadius: SIZES.radius,
          padding: 2,
          ...styles.shadow
        }}
      >
        <Text
          style={{
            fontFamily: "Didot-Bold",
            fontSize: 50,
            fontWeight: "bold",
            color: COLORS.lightyellow,
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Beat the
        </Text>
        <Text
          style={{
            fontFamily: "Didot-Bold",
            fontSize: 50,
            fontWeight: "bold",
            color: COLORS.lightyellow,
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          heat!
        </Text>
      </View>
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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
});
