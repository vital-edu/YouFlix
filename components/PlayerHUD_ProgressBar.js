import React from 'react'
import { StyleSheet, Slider } from 'react-native'

const ProgressBar = props => (
  <Slider style={styles.container}></Slider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProgressBar
