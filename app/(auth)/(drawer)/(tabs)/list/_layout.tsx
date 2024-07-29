import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: 'Back',
      }}
    >
      <Stack.Screen name="index" options={{ title: "List"}} />
      <Stack.Screen name="[id]" options={{
        title: 'Details',
      }} />
    </Stack>
  )
}

export default Layout