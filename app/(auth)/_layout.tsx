import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="[id]" options={{ 
            title: 'Details', 
            headerBackTitle: 'Back',
            headerStyle: {
                backgroundColor: '#6EACDA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            }} />
    </Stack>
  )
}

export default Layout