import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from "../styles/productcard.style";

export default function ProductCardComponent({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.imageContainer} onPress={onPress}>
      <Image 
        style={styles.image}
        source={item.path}
      />
      <View style={styles.details}>
        <Text style={styles.title}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}