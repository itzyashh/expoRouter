

import { Stack } from 'expo-router';


import 'react-native-reanimated';


 const InternalLayout = () => {
  return (
   
      <Stack
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
        <Stack.Screen name="(auth)/(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ title: 'Register', headerBackTitle: 'Login' }} />
        <Stack.Screen name="policy" options={{ title: 'Privacy Policy', presentation:'modal', headerShown: false }} />
      </Stack>

  );
}



export default function RootLayout() {
  return (
    <InternalLayout />
  );
}
