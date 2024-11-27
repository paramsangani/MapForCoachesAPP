import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import BottomTabs from "./src/screens/BottomTabs";
import SportsList from "./src/screens/SportsList";
//import SportDetail from "./src/screens/SportsDetail"; // Import the new screen
import Football from "./src/screens/sportsScreens/Football";
import Basketball from "./src/screens/sportsScreens/Basketball";
import Soccer from "./src/screens/sportsScreens/Soccer";
import Volleyball from "./src/screens/sportsScreens/Volleyball";
import ProfileScreen from './src/screens/ProfileScreen'; 
import FootballQuestions from "./src/screens/FootballQuestions"; // Import FootballQuestions

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("events triggered ", fontsLoaded);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("Fonts not loaded");
    return null;
  } else {
    console.log("Fonts loaded");
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 70,
          },
        }}
      >
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SportsList" component={SportsList} />
        {/* Add individual sports screens */}
        <Stack.Screen name="Football" component={Football} />
        <Stack.Screen name="Basketball" component={Basketball} />
        <Stack.Screen name="Soccer" component={Soccer} />
        <Stack.Screen name="Volleyball" component={Volleyball} />
        {/* Add the ProfileScreen to the navigator */}
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: "Profile" }} 
        />
        {/* Add FootballQuestions screen */}
        <Stack.Screen 
          name="FootballQuestions" 
          component={FootballQuestions} 
          options={{ title: "Football Questions" }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
