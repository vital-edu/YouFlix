import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PlayButton from './PlayerHUD_Play'
import ProgressBar from './PlayerHUD_ProgressBar'
import FullscreenButton from './PlayerHUD_FullscreenButton'

export default class PlayerHUD extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlayButton />
        <View style={styles.bottom}>
          <ProgressBar/>
          <FullscreenButton/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  bottom: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
  }
});
