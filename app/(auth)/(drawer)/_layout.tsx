
import { Drawer } from 'expo-router/drawer';

const Layout = () => {
  return (
    <Drawer >
        <Drawer.Screen name="(tabs)" 
        options={{
          headerShown: false,
          title: 'Home',
        }}
        />
        <Drawer.Screen name="settings"
        options={{
          title: 'Settings',
        }} />
    </Drawer>
  )
}

export default Layout

