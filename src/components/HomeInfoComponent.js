import { View, Text } from 'react-native';
import React from 'react';

export default function HomeInfoComponent() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, textAlign: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>M</Text><Text>usculoskeletal</Text>{' '}
        <Text style={{ fontWeight: 'bold' }}>A</Text><Text>thletic Injury <Text style={{ fontWeight: 'bold' }}>P</Text>revention Online Training Course (MAP) for Coaches</Text>
      </Text>
      <Text style={{ fontSize: 16, marginVertical: 10, textAlign: 'center' }}>
        Reducing Injuries and Enhancing Performance
      </Text>
      <Text style={{ fontSize: 14, textAlign: 'justify' }}>
        The MAP for Coaches is a novel eLearning tool for youth sports coaches to increase their knowledge regarding
        sports-related Musculoskeletal injuries and best injury
        prevention practices towards reducing injuries and enhancing performance in youth sport athletes.
      </Text>
    </View>
  );
}