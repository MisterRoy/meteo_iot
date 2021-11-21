import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { appColors } from '../styles/colors'

export default function Chart({
  title = 'My chart',
  data = [1, 1.5, 2, 1.5, 1, 0.5, 0, 1, 1.5, 2, 1.5, 1, 0.5, 0],
  labels = [],
  unit = ''
}) {
  return (
    <View style={styles.chart}>
      <Text style={styles.chartTitle}>{title}</Text>
      <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data
              }
            ]
          }}
          width={0.95 * Dimensions.get("window").width} // from react-native
          height={230}
          yAxisSuffix={unit}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            //backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: () => appColors.secondaryColor,
            labelColor: () => '#000',
            style: {
              borderRadius: 20
            },
            propsForDots: {
              r: "5",
              strokeWidth: "2.5",
              stroke: '#e04c1b'
            }
          }}
          bezier
          style={{
            marginVertical: 18,
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  chartTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 5,
    color: '#000'
  }
})
