import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View style={styles.container}>
        <Link href="/home" replace>
            <Text style={styles.text}>go Inisde</Text>
        </Link>
        <Link href="/register">
            <Text style={styles.text}>Register</Text>
        </Link>
        <Link href="/policy">
            <Text style={styles.text}>Privacy Policy</Text>
        </Link>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#021526'
    },
    text:{
        color: 'white'
    }
})