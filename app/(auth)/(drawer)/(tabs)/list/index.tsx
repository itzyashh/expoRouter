import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={'/(auth)/(drawer)/(tabs)/list/22?query=boo'}>Go to details 22</Link>
      <Link href={'/(auth)/(drawer)/(tabs)/list/55?go=op'}>Go to details 55</Link>
    </View>
  )
}

export default Page