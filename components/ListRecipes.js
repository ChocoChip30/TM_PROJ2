import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RecipeCard from './RecipeCard'

const ListRecipes = ({data}) => {
    return (
        <FlatList
              data={data}
              renderItem={({ item }) => <RecipeCard item={item} />}
              keyExtractor={(item) => item?.id}
              contentContainerStyle={{ columnGap: 10 }}
        />
      )
}

export default ListRecipes