
import { Drawer } from 'expo-router/drawer';

const _layout = () => {
  return <Drawer screenOptions={{
    headerShown: false,
  }} >
    <Drawer.Screen name="(tabs)" options={{title: 'Home'}} />
    <Drawer.Screen name="settings" options={{title: 'Settings'}} />
  </Drawer>;
}

export default _layout
