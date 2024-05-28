import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity, Image} from "react-native";
import React from "react";
import { COLORS, drinkData, SIZES, icons } from "../constants";

import ListItems from "../components/ListItems";
import { useNavigation } from "@react-navigation/native";

const FoodMenu = () => {
    const navigation = useNavigation()
  const [allFood, setAllFood] = React.useState(drinkData.Food);

  return (
    <SafeAreaView>
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
          FOOD
        </Text>
      </View>
      <View style={{ top: "12.5%", paddingBottom: 180 }}>
        <FlatList
          data={allFood}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  backgroundColor: COLORS.lightyellow,
                  width: "95%",
                  borderRadius: 7,
                  margin: 5,
                  flex: 1,
                  alignSelf: "center",
                  ...styles.shadow,
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => {
                    navigation.navigate("FoodItemPage", item);
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      height: 100,
                      width: 120,
                      marginLeft: 20,
                      margin: 8,
                      borderRadius: SIZES.radius,
                    }}
                  />
                  <View style={{ flex: 1, paddingLeft: 20 }}>
                    <Text
                      style={{
                        color: COLORS.thegreen,
                        fontWeight: "bold",
                        fontSize: 16,
                        flexWrap: "wrap",
                        paddingBottom: 10,
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingRight: 30,
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.gray,
                          fontWeight: "bold",
                        }}
                      >
                        $ {item.price}
                      </Text>
                      <Text
                        style={{
                          color: COLORS.gray,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Image
                            source={icons.bubbleTea}
                            style={{
                              height: 20,
                              width: 12,
                              tintColor: "grey",
                              marginRight: 5,
                            }}
                          />
                          <Text
                            style={{
                              color: COLORS.gray,
                              fontWeight: "bold",
                              marginTop: 5,
                            }}
                          >
                            {item.points}
                          </Text>
                        </View>
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ columnGap: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({});
