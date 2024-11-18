import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Soccer() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>COMING SOON</Text>
      <Text style={styles.body}>
        The MAP for Coaches’ Injury Prevention Training Course for Youth Soccer Coaches is under development and will be available soon.
      </Text>
      <Text style={styles.body}>
        Please contact our team at <Text style={styles.email}>tip.lab@health.slu.edu</Text> for additional information.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#555',
  },
  email: {
    fontWeight: 'bold',
    color: '#007bff',
  },
});