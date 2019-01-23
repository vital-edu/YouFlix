import React from 'react'
import { View, Text, StyleSheet, Slider } from 'react-native'

const pad = (n, width, z = 0) => {
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const minutesAndSeconds = (position) => ([
  pad(Math.floor(position / 60), 2),
  pad(position % 60, 2),
])

const ProgressBar = ({
  videoLength,
  currentPosition,
  onSeek,
  onSlidingStart,
}) => {
  const elapsed = minutesAndSeconds(currentPosition)
  const total = minutesAndSeconds(videoLength)
  return (
    <View style={styles.container}>
      <Slider
        maximumValue={Math.max(videoLength, 1, currentPosition)}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={styles.slider}
        minimumTrackTintColor='#8583f1'
        maximumTrackTintColor='white'
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
        thumbTintColor='white'
      />
      <Text style={styles.text}>
        {elapsed[0] + ":" + elapsed[1]} / {total[0] + ":" + total[1]}
      </Text>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  slider: {
    flex: 1,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 10,
  }
})
