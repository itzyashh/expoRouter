import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { LinkProps } from 'expo-router/build/link/Link'
import { ExpoRouter } from 'expo-router/types/expo-router'

type SimpleButtonProps = {
    title: string
    link: string | null
    replace?: boolean
}

const SimpleButton: React.FC<SimpleButtonProps> = ({ title, link, replace }) => {



  return (
    <Link
     replace={replace}
     href={ link ? link : '/' }
          asChild>
          <Pressable>
            <Text
            style={styles.text}>{title}</Text>
          </Pressable>
        </Link>
  )
}

export default SimpleButton

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
    },
})