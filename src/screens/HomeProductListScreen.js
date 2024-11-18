import { View, Text } from 'react-native'
import React from 'react'
import fetchHomeProduct from "../hooks/fetchHomeProduct"

export default function HomeProductListScreen() {
        fetchHomeProduct();
    return (
    <View>
      <Text></Text>
    </View>
  )
}