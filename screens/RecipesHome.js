import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, SIZES, icons, images, drinkData } from '../constants'
import ListRecipes from '../components/ListRecipes'


const RecipesHome = () => {
    const [recipes, setRecipes] = React.useState(drinkData.Recipes)
    const navigation = useNavigation()

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: "row",
          top: "12%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => {
            navigation.navigate("Home")
        }}>
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
            Our Favorite Recipes
          </Text>
        </View>
      </View>
      <View style={{ top: "6%", paddingBottom: 220}}>
        <ListRecipes data={recipes} />
      </View>
    </View>
  )
}

export default RecipesHome

const styles = StyleSheet.create({})