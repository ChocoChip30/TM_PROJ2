import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES, icons } from "../constants";

import { useNavigation } from "@react-navigation/native";

const ItemCard = ({item}) => {
  const navigation = useNavigation()

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
          navigation.navigate("ItemPage", item);
        }}
      >
        <Image
          source={item.image}
          style={{
            height: 100,
            width: 80,
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
          <View style={{ flexDirection: "row", justifyContent:'space-between', paddingRight: 30 }}>
            <Text
              style={{
                color: COLORS.gray,
                fontWeight: 'bold'
              }}
            >
              $ {item.price}
            </Text>
            <Text
            style={{
              color: COLORS.gray,
            }}
          >
            <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'center'}}>
              <Image source={icons.bubbleTea} style={{height: 20, width: 12, tintColor:'grey', marginRight: 5 }}/>
              <Text style={{
                color: COLORS.gray,
                fontWeight: 'bold',
                marginTop: 5
              }}>{item.points}</Text>
            </View>
          </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemCard;

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
