import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import ProfileScreen from './ProfileScreen';
import FootballScreen from './FootballScreen';
import AboutPage from './SearchScreen';

const Tabs = createBottomTabNavigator();

const screenOptions={
    tabBarShowLabel:false
}

export default function BottomTabs() {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen 
            name = "HomeScreen" component = {HomeScreen}
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    return (
                        <Ionicons
                            name={focused?'home':'home-outline'}
                            size={theme.sizes.xLarge}
                            color={theme.colors.primary}
                        />
                    );
                }
            }}
        />

        <Tabs.Screen 
            name = "ProfileScreen" component = {ProfileScreen}
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    return (
                        <Ionicons
                            name={focused?"person": 'person-outline'}
                            size={theme.sizes.xLarge}
                            color={theme.colors.primary}
                        />
                    );
                }
            }}
        />

        <Tabs.Screen 
            name = "FootballScreen" component = {FootballScreen}
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    return (
                        <Ionicons
                            name={focused?"american-football": 'american-football-outline'}
                            size={theme.sizes.xLarge}
                            color={theme.colors.primary}
                        />
                    );
                }
            }}
        />

        <Tabs.Screen 
            name = "About Page" component = {AboutPage}
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    return (
                        <Ionicons
                            name={focused?"document-text": 'document-text-outline'}
                            size={theme.sizes.xLarge}
                            color={theme.colors.primary}
                        />
                    );
                }
            }}
        />
    </Tabs.Navigator>
  )
}