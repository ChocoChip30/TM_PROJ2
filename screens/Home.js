import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  LogBox,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { COLORS, SIZES, FONTS, icons, images, drinkData } from "../constants";
import Poster from "../components/Poster";

const Home = () => {
  const [coldDrinks, setColdDrinks] = React.useState(drinkData.ColdDrinks);

  function renderHeader() {
    const renderItem = ({ item, index }) => (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: COLORS.lightyellow,
            borderRadius: SIZES.radius,
          }}
        >
          <ImageBackground
            source={item.image}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
              margin: 10,
              height: 200,
              width: 150,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                //flex: 1,
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                    textShadowColor: "rgba(0, 0, 0, 0.8)",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ color: "silver", fontSize: 15, fontWeight: "bold" }}
                >
                  {item.calories} Kcal
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );

    return (
      <View style={{ width: "100%", height: 290, ...styles.shadow }}>
        <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: SIZES.padding * 2,
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => console.log("pressed")}
            >
              <Image
                source={icons.notification_white}
                resizeMode="contain"
                style={{ flex: 1 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: SIZES.base,
            }}
          >
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 60,
                fontFamily: "Bodoni 72",
                textShadowColor: "rgba(0, 0, 0, 0.7)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 20,
              }}
            >
              P A N K I N
            </Text>
          </View>

          <View style={{ position: "absolute", bottom: "-68%" }}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 30,
                fontFamily: 'Optima-ExtraBlack',
                textShadowColor: "rgba(0, 0, 0, 0.4)",
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 20,
              }}
            >
              Meet the cool kids
            </Text>
            <FlatList
              contentContainerStyle={{
                marginTop: SIZES.base,
              }}
              data={coldDrinks}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            ></FlatList>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        {renderHeader()}
      </View>
      <Poster/>
    </ScrollView>
  );
};

export default Home

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
