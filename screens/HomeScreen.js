import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView,
TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header';
import InfoPanel from '../components/InfoPanel';
import Chart from '../components/Chart';
import Button from '../components/Button';
import { appColors } from '../styles/colors'

import { db } from '../services/Firebase';
import { ref, onValue, get, child, getDatabase } from '@firebase/database';
import {formatDataFromFirebase, getDataFromFirebase} from '../services/RtdbFirebase';


const temperatures = [23.6, 23.7, 23.8, 23.9, 24.0, 24.2];
const humidity = [73.86, 73.88, 73.88, 73.97, 73.99, 74.10];



const HomeScreen = () => {

  const [temp, setTemp] = useState([1, 2, 3]);
  const [hum, setHumidity] = useState(humidity)
  const [pres, setPressure] = useState([1, 2, 3])

  useEffect(() =>{
    const _db = getDatabase();
    const myRef = ref(_db, '/');
    onValue(myRef, snapshot =>{
      console.log('New event !');
      let data = snapshot.val();
      data = formatDataFromFirebase(data);

      setTemp(data['temperature']);
      setHumidity(data['humidity']);
      setPressure(data['pressure']);
    }, err =>{
      console.log(err);
    });
  }, []);
  

  return (
    <SafeAreaView style={styles.container}>
      <Header/>

      <InfoPanel
        temperature={temp[temp.length -1]}
        humidity={hum[hum.length -1]}
        pressure={pres[pres.length -1]}
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
          data={pres}
          unit='hPa'
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
