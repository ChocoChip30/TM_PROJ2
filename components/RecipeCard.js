import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { COLORS, SIZES, icons, images } from '../constants'
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({item}) => {
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
        navigation.navigate("RecipePage", item);
      }}
    >
      <Image
        source={item.image}
        style={{
          height: 180,
          width: 150,
          marginLeft: 20,
          margin: 8,
          borderRadius: SIZES.radius,
        }}
      />
      <View style={{ flex: 1, alignItems: 'flex-start', padding: 5}}>
        <Text
          style={{
            color: COLORS.thegreen,
            fontWeight: "bold",
            fontSize: 18,
            flexWrap: "wrap",
            //padding: 10,
            fontFamily: "Optima-ExtraBlack"
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.gray,
            fontSize: 14,
            flexWrap: "wrap",
            paddingTop: 10,
          }}
        >
          {item.description1} 
        </Text>
      </View>
    </TouchableOpacity>
  </View>
  )
}

export default RecipeCard

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
})