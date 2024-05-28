import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import React from "react";
import { COLORS, drinkData, icons, Icons, images, SIZES } from "../constants";

const Account = () => {
  const badge = drinkData.Badges;

  return (
    // <ImageBackground
    // source={images.account}
    // style={{ width: "100%", height: "100%", }}
    //  >
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
            fontSize: 35,
            fontWeight: "bold",
            color: COLORS.white,
            textShadowColor: "rgba(0, 0, 0, 0.5)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            top: "40%",
          }}
        >
          MY PANKIN
        </Text>
      </View>

      <View
        style={{
          backgroundColor: COLORS.lightyellow,
          ...styles.shadow,
          borderRadius: SIZES.radius,
          padding: SIZES.padding,
          margin: 10,
          top: 100,
        }}
      >
        <Image
          source={images.girl}
          style={{
            height: 150,
            width: 150,
            borderRadius: SIZES.radius,
            borderColor: COLORS.thepink,
            borderWidth: 5,
          }}
        />
        <View style={styles.nameSquare}>
          <Text style={styles.name}>Mayim Howard</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.thegreen,
            borderRadius: SIZES.radius,
            padding: SIZES.padding * 0.4,
            width: 180,
            justifyContent: "center",
            position: "absolute",
            top: 110,
            right: 0,
            margin: 20,
          }}
        >
          <Image
            source={icons.heart}
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.thepink,
              marginRight: 10,
            }}
          />
          <Text
            style={{
              color: COLORS.thepink,
              fontFamily: "Optima-ExtraBlack",
              fontWeight: "bold",
            }}
          >
            Favorite Customer
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: COLORS.othergreen,
          ...styles.shadow,
          borderRadius: SIZES.radius,
          margin: 10,
          top: 100,
          flexDirection: "row",
          justifyContent: 'space-between'
        }}
      >
        <View style={{marginLeft: 22, marginTop: 35,  alignItems: 'center' }}>
          <Text style={{
                color: COLORS.thepink,
                fontWeight: "bold",
                marginTop: 3,
                fontSize: 25,
                fontFamily: "Optima-ExtraBlack",
              }}>My Pankin Points</Text>

          <View style={{ flexDirection: "row", alignItems: 'center' }}>
            <Image
              source={icons.bubbleTea}
              style={{
                height: 50,
                width: 30,
                tintColor: COLORS.thepink,
                marginRight: 5,
              }}
            />
            <Text
              style={{
                color: COLORS.thepink,
                fontWeight: "bold",
                marginTop: 4,
                marginLeft: 5,
                fontSize: 40,
                fontFamily: "Optima-ExtraBlack",
              }}
            >
              4250
            </Text>
          </View>
        </View>

        <Image
          source={images.points}
          style={{ height: 150, width: 150, margin: 10 }}
        />
      </View>

      <View
        style={{
          ...styles.shadow,
          borderRadius: SIZES.radius,
          marginTop: 10,
          top: 100,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Optima-ExtraBlack",
              fontSize: 20,
              fontWeight: "bold",
              color: COLORS.thepink,
              textShadowColor: "rgba(0, 0, 0, 0.1)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
              marginLeft: 15,
              marginBottom: 10
            }}
          >
            Badges Earned
          </Text>
        </View>

        <FlatList
          data={badge}
          renderItem={({ item }) => {
            return (
              <View>
                <View
                  style={{
                    alignItems: "center",
                    margin: 10,
                    backgroundColor: COLORS.lightyellow,
                    width: 160,
                    height: 160,
                    borderRadius: SIZES.radius,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: SIZES.radius,
                      borderColor: COLORS.thepink,
                      borderWidth: 5,
                    }}
                  />
                  <Text
                    style={{
                      color: COLORS.thepink,
                      fontFamily: "Optima-ExtraBlack",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={icons.bubbleTea}
                      style={{
                        height: 20,
                        width: 12,
                        tintColor: COLORS.thepink,
                        marginRight: 5,
                      }}
                    />
                    <Text
                      style={{
                        color: COLORS.thepink,
                        fontWeight: "bold",
                        marginTop: 3,
                        fontWeight: "bold",
                        fontFamily: "Optima-ExtraBlack",
                      }}
                    >
                      {item.points}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ columnGap: 8 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

export default Account;

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
  nameSquare: {
    position: "absolute",
    width: "50%",
    height: "40%",
    top: 0,
    right: 10,
    margin: 20,
    borderRadius: 23,
  },
  name: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 35,
    color: COLORS.thepink,
    fontWeight: "bold",
    fontFamily: "Optima-ExtraBlack",
  },
});
