import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { appColors } from '../styles/colors'

export default function InfoPanel({
  temperature = 25.6,
  humidity = 40.32,
  pressure = 1.20,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.temperatureColumn}>
        <Text style={styles.title}>Temperature</Text>
        <Text style={styles.value}>{temperature}°C</Text>
      </View>
      <View style={styles.humidityColumn}>
        <Text style={styles.title}>Humidity</Text>
        <Text style={styles.value}>{humidity}%</Text>
      </View>
      <View style={styles.pressureColumn}>
        <Text style={styles.title}>Pressure</Text>
        <Text style={styles.value}>{pressure} hPa</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 70,
    backgroundColor: 'transparent',
    padding: 8,
    flexDirection: 'row',

  },
  temperatureColumn: {
    flex: 1,
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  humidityColumn: {
    flex: 1,
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 2.5,
    borderLeftColor: '#e04c1b',
    borderRightWidth: 2.5,
    borderRightColor: '#e04c1b',
    marginHorizontal: 5
  },
  pressureColumn: {
    flex: 1,
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    color: '#000',
    fontWeight: '100'
  },
  value: {
    fontSize: 25,
    fontWeight: 'bold',
    color: appColors.valueColor,
  }
})
