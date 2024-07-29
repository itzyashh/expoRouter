import { Stack } from "expo-router"


const Page = () => {
  return (
    <Stack>
        <Stack.Screen name="home" options={{
            title: 'Home',
            }} />
    </Stack>
  )
}

export default Page