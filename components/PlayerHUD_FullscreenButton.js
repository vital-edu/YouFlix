import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const ProgressBar = props => (
  <TouchableOpacity style={styles.container} onPress={this._onPressButton}>
    <Image
      style={styles.image}
      source={require('./img/fullscreen.png')}
    />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  image: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  }
});

export default ProgressBar
