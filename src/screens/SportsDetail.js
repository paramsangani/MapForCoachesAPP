import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function SportDetail({ route }) {
  const { item } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={item.path} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.statsContainer}>
        {item.stats && (
          <>
            <Text style={styles.statsTitle}>Stats:</Text>
            <Text style={styles.statText}>Popularity: {item.stats.popularity}</Text>
            <Text style={styles.statText}>Teams Worldwide: {item.stats.teamsWorldwide}</Text>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  statsContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statText: {
    fontSize: 16,
    marginBottom: 5,
  },
});