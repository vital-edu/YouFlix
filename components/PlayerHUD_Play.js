import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'

const PlayButton = props => (
  <TouchableOpacity style={styles.container} onPress={this._onPressButton}>
    <Image
      style={styles.image}
      source={require('./img/play-button.png')}
    />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  }
});

export default PlayButton
