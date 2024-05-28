import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { SIZES, drinkData, images, icons, COLORS } from '../constants'
import ItemCard from './ItemCard'

const ListItems = ({data}) => {
  //const [allDrinks, setAllDrinks] = React.useState(drinkData.AllDrinks);

  return (
    <FlatList
          data={data}
          renderItem={({ item }) => <ItemCard item={item} />}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ columnGap: 10 }}
          showsVerticalScrollIndicator={false}
    />
  )
}

export default ListItems

const styles = StyleSheet.create({})