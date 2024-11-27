import { View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import ProductCardComponent from '../components/ProductCardComponent';

const localProductList = [
  { id: "1A", title: "FOOTBALL", path: require("../../assets/images/football-2.jpg") },
  { id: "1B", title: "BASKETBALL", path: require("../../assets/images/basketball-1.jpg") },
  { id: "1C", title: "SOCCER", path: require("../../assets/images/soccer-2.jpg") },
  { id: "1D", title: "VOLLEYBALL", path: require("../../assets/images/volleyball-1.jpg") },
];

export default function SportsList({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      title: 'Sports',
      headerBackTitle: "Home",
    });
  }, [navigation]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <LottieView
          source={require("../../assets/jsons/animation2.json")}
          autoPlay
          style={{ width: 150, height: 150 }}
          loop
        />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <ProductCardComponent
      item={item}
      onPress={() => {
        switch (item.title) {
          case "FOOTBALL":
            navigation.navigate("Football");
            break;
          case "BASKETBALL":
            navigation.navigate("Basketball");
            break;
          case "SOCCER":
            navigation.navigate("Soccer");
            break;
          case "VOLLEYBALL":
            navigation.navigate("Volleyball");
            break;
          default:
            navigation.navigate("SportDetail", { item });
        }
      }}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
}
