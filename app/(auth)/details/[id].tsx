import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Page = () => {

    const { id, query,go } = useLocalSearchParams()

  return (
    <View>
        <Stack.Screen options={{ title: `Details page ${id}` }} />
      <Text>Details page {id}</Text>
      {query && <Text>Query: {query}</Text>}
      {go && <Text>Go: {go}</Text>}
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})