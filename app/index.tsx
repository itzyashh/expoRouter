import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View style={styles.container}>
        <Link href={'/register'} asChild>
        <TouchableOpacity><Text>Register</Text></TouchableOpacity>
        </Link>
        <Link href={'/privacy'} asChild>
        <TouchableOpacity><Text>Privacy</Text></TouchableOpacity>
        </Link>
        <Link href={'(app)/(drawer)/home'} replace asChild>
        <TouchableOpacity><Text>Home</Text></TouchableOpacity>
        </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})