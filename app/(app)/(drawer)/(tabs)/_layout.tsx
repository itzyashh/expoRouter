import React from 'react'
import { Link, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { DrawerToggleButton } from '@react-navigation/drawer'


const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor='#000' />,

        headerRight: () => <Link replace asChild href={'/'} ><Ionicons
          name="log-out-outline" size={24} style={{ marginRight: 10 }} color="black" /></Link>
      }}>
      <Tabs.Screen
        options={{
          headerTitle: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
        }}
        name="home" />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, color }) => <Ionicons name="person-outline" size={size} color={color} />
        }} />
    </Tabs>
  )
}

export default TabLayout