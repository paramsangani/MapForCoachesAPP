import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./src/screens/SportsList";
import { useFonts } from "expo-font";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import BottomTabs from "./src/screens/BottomTabs";
import SportsList from "./src/screens/SportsList";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {

  let[fontsLoaded]=useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
        console.log("events triggered ", fontsLoaded);
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  
  if(!fontsLoaded){
    console.log("Fonts not loaded");
    return null;
  }else{
    console.log("Fonts loaded")
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left:0,
          elevation: 0,
          height: 70,
        },
      }}>
        <Stack.Screen name = "BottomTabs" component = {BottomTabs}
        options={{
          headerShown:false,
        }}
        />
        <Stack.Screen name = "SportsList" component = {SportsList}/>
      </Stack.Navigator >
    </NavigationContainer>
  );
}