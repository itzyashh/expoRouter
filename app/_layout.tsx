
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack 
    screenOptions={{
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerBackTitle: 'Back',
    }}
    >
        <Stack.Screen name="index" options={{
            title: 'Login',
            headerShown: false,
            }} />
        <Stack.Screen name="(auth)" options={{
            headerShown: false,
            }} />

            
    </Stack>
  )
}

export default Layout