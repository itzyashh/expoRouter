import { MaterialCommunityIcons } from "@expo/vector-icons"
import { DrawerToggleButton } from "@react-navigation/drawer"
import { Link, Tabs } from "expo-router"


const Page = () => {

  return (
    <Tabs
    screenOptions={{
      headerLeft: () => <DrawerToggleButton />,
      headerRight: () => <Link asChild replace href={"/"} ><MaterialCommunityIcons
      style={{marginRight: 12}}
      name="logout" size={24}  color="black" /></Link>,
      tabBarStyle: {
        backgroundColor: 'white',
        height: 98,
      },
    }}
    >
        <Tabs.Screen name="home" options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            title: 'Home',
            }} />

        <Tabs.Screen name="profile" options={{
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
            title: 'Profile',
            }} />
        <Tabs.Screen name="list" options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="format-list-numbered" color={color} size={size} />
            ),
            title: 'List',
            }} />
    </Tabs>
  )
}

export default Page