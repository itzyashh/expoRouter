import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { router, Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { DrawerToggleButton } from '@react-navigation/drawer';
const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
        headerStyle: {
          backgroundColor: '#6EACDA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
            <TouchableOpacity
            onPress={() => router.replace('/')}
            >
            <AntDesign
            style={{marginRight: 10}}
            name="logout" size={24} color="#ffffff" />
            </TouchableOpacity>
        ),
        headerLeft: () => (
          <DrawerToggleButton tintColor='#ffff' />
        )
      }}
    >
        <Tabs.Screen name="home" options={{ title: 'Home',
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
            ),
         }} />
        <Tabs.Screen name="action" options={{ title: 'Action',
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="plus" size={size} color={color} />
            ),
         }}
         listeners={{tabPress: e => {
            e.preventDefault();
            Alert.alert('Action', 'Action Tab is disabled');
         }}
            }/>



        <Tabs.Screen name="profile" options={{ title: 'Profile',
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={size} color={color} />
            ),
         }} />
        <Tabs.Screen name="list" options={{ title: 'List',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="bars" size={size} color={color} />
            ),
         }} />
    </Tabs>
  )
}

export default TabLayout