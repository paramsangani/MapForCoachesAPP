import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

export default function AboutPage() {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>About</Text>
      <Text style={styles.body}>
        With over 45 million school sports and organized community-based youth (defined as age 6 to 17 years) programs in the United States, the potential for youth sports injuries is enormous. More than half of the youth population in the United States participate in sport. Regular participation in youth sport is important for physical and mental health, but not without the risk of injuries; every athletic exposure puts participants at a risk for injury. Of greatest burden are musculoskeletal injuries, i.e., muscle, joint (e.g., tendons and ligaments) and bone injuries, particularly in team sports such as youth football, basketball, soccer, and volleyball.
      </Text>
      <Text style={styles.body}>
        Beyond ensuring that players are available for games and practices/training, which is necessary for performance and winning medals, reducing the risk of both sudden and gradual onset (e.g., overuse) injuries in youth sports is essential to protect the present and future health of players. Coaches have a crucial role to play in ensuring the safety of their players.
      </Text>
      <Text style={styles.body}>
        The MAP for Coaches is a novel eLearning tool freely available to youth sport coaches in the United States and around the world. Our goal is to increase coaches’ knowledge regarding musculoskeletal injury prevention and empower them to implement current and best injury prevention practices towards reducing injuries and enhancing performance in youth sport athletes.
      </Text>
      <Text style={styles.header}>Project Team</Text>
      <Text style={styles.teamMember}>Dr. Oluwatoyosi (Olu) Owoeye (PhD, PT) (Project Lead)</Text>
      <Text style={styles.teamDetails}>
        Sports Injury Prevention, Dissemination and Implementation Science (Saint Louis University)
      </Text>
      <Text style={styles.teamMember}>Dr. Flavio Esposito (PhD)</Text>
      <Text style={styles.teamDetails}>
        Computer Science (Saint Louis University)
      </Text>
      <Text style={styles.teamMember}>Dr. Shelly Rauvola (PhD)</Text>
      <Text style={styles.teamDetails}>
        Psychology (DePaul University)
      </Text>
      <Text style={styles.teamMember}>Dr. Shelina Babul (PhD)</Text>
      <Text style={styles.teamDetails}>
        Sports Injury Prevention, eLearning (University of British Columbia)
      </Text>
      <Text style={styles.teamMember}>Dr. Ross Brownson (PhD)</Text>
      <Text style={styles.teamDetails}>
        Dissemination, Implementation and Policy Science (Washington University in Saint Louis)
      </Text>
      <Text style={styles.teamMember}>Trey Porter (MS, MA)</Text>
      <Text style={styles.teamDetails}>
        Sports Administration, Youth Football, Coaching (Missouri Minority Coaches Association)
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 80, // Add this line to create space at the top
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
    marginBottom: 15,
    color: '#555',
    lineHeight: 22,
  },
  teamMember: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  teamDetails: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});