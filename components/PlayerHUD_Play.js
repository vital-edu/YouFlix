import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const PlayButton = ({ paused, onPressPlay, onPressPause }) => (
  <View style={styles.container}>
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <Image
          style={styles.image}
          source={require('./img/pause-button.png')}
        />
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay}>
        <Image
          style={styles.image}
          source={require('./img/play-button.png')}
        />
      </TouchableOpacity>
    }
  </View>
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
