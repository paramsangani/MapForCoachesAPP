import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';
import SearchScreen from './SearchScreen';

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
            name = "CartScreen" component = {CartScreen}
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
            name = "SearchScreen" component = {SearchScreen}
            options={{
                headerShown:false,
                tabBarIcon:({focused}) =>{
                    return (
                        <Ionicons
                            name={focused?"search": 'search-outline'}
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