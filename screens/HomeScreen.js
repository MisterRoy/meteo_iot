import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView,
TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import InfoPanel from '../components/InfoPanel';
import Chart from '../components/Chart';
import Button from '../components/Button';
import { appColors } from '../styles/colors'


const temperatures = [23.6, 23.7, 23.8, 23.9, 24.0, 24.2];
const humidity = [73.86, 73.88, 73.88, 73.97, 73.99, 74.10];


const HomeScreen = () => {
  const [temp, setTemp] = useState(temperatures);
  const [hum, setHumidity] = useState(humidity)

  return (
    <SafeAreaView style={styles.container}>
      <Header/>

      <InfoPanel
        temperature={temp[temp.length -1]}
        humidity={56.17}
        pressure={1.04}
      />

      <ScrollView
        style={styles.scrollView}
      >
        <Chart
          title='Temperature'
          data={temp}
          unit=' °C'
        />

        <Chart
          title='Humidity'
          data={hum}
          unit='%'
        />

        <Chart
          title='Pressure'
          data={temp}
          unit='%'
        />

      </ScrollView>
      
      {/* <Button
        title='Add temp'
        onPress={
          () => {
            setTemp([...temp.slice(-7), (30 * Math.random()).toFixed(2)])
          }
        }
      /> */}

      

      

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    
  },
  text: {
    color: '#f0f',
    fontSize: 90,
    fontWeight: "bold",
    position: 'relative',
    marginBottom: 150
  },
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  chartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: -10
  },
  scrollView: {
    backgroundColor: '#fff',
    width: '100%',
    marginVertical: 10,
  },
  
})
