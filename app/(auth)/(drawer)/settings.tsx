import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'

const settings = () => {
  const navigation = useNavigation()

  const onTap = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <View>
      <Text onPress={onTap}>settings</Text>
    </View>
  )
}

export default settings

const styles = StyleSheet.create({})