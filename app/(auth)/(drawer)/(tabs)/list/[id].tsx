import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const Page = () => {

  const { id } = useLocalSearchParams()

  return (
    <View>
      <Stack.Screen options={{
        title: `Details ${id}`,
        
      }}/>
      <Text>details {id}</Text>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({})