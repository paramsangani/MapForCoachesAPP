import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Football() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Football Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});