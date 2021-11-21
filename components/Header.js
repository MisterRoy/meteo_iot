import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { appColors } from '../styles/colors'
import getCurrentDate from '../services/Date';

export default function Header({
  date = getCurrentDate(),
  location = 'Dakar - Colobane',
  icon = 'https://picsum.photos/200',
  // icon = 'https://i.pravatar.cc/300'
}) {

  const [imageUrl, setImageUrl] = useState(icon);
  useEffect(() =>{
    
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={{uri: imageUrl + '?' + Date.now()}}
          style={styles.icon}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
    margin: 0,
    padding: 5,
    paddingHorizontal: 25,
  },
  leftContainer: {
    flex: 3,
    backgroundColor: 'transparent',
    height: '100%',
    justifyContent: 'space-around'
  },
  rightContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  date: {
    fontSize: 19,
    color: appColors.dateColor,
    fontWeight: 'bold'
  },
  location: {
    fontSize: 23,
    //color: appColors.locationColor,
    color: '#e04c1b',
    fontWeight: 'bold'
  },
  icon: {
    width: '95%',
    height: '95%',
    borderRadius: 50
  }
})
