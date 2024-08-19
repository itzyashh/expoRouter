import React from 'react'
import { router, Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { DrawerToggleButton } from '@react-navigation/drawer'

const Layout = () => {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#6EACDA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
    >
        <Stack.Screen name="details" options={{ title: 'Details' }} />
        <Stack.Screen name="[id]" />
    </Stack>
  )
}

export default Layout