import { View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href="/list/1">Internal Details</Link>
      <Link href="/(auth)/11">External Details</Link>
    </View>
  )
}

export default Page