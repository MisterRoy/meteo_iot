import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { appColors } from '../styles/colors'

export default function Button({
  title = 'Button',
  onPress = () => null,

}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    backgroundColor: appColors.secondaryColor,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
})
