import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return <Drawer
  screenOptions={{
    headerStyle: {
      backgroundColor: '#6EACDA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <Drawer.Screen name='(tabs)' options={{
        drawerLabel: 'Home',
        headerShown: false
    }} />
    <Drawer.Screen name='settings' options={{
        drawerLabel: 'Settings',
    }} />
  </Drawer>
}

export default DrawerLayout