import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PlayButton from './PlayButton'
import ProgressBar from './ProgressBar'
import FullscreenButton from './FullscreenButton'
import Video from 'react-native-video'

export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paused: true,
      totalLength: 0,
      currentPosition: 0,
    }
  }

  setDuration(data) {
    this.setState({ totalLength: Math.floor(data.duration), paused: false })
  }

  setTime(data) {
    this.setState({ currentPosition: Math.floor(data.currentTime) })
  }

  seek(time) {
    time = Math.round(time)
    this.refs.videoElement && this.refs.videoElement.seek(time)
    this.setState({
      currentPosition: time,
      paused: false,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require('./sample/broadchurch.mp4')}
          ref='videoElement'
          paused={this.state.paused}
          onLoad={this.setDuration.bind(this)}
          onProgress={this.setTime.bind(this)}
          style={styles.videoElement}
        />
        <View style={styles.overlay}>
          <PlayButton
            onPressPlay={() => this.setState({ paused: false })}
            onPressPause={() => this.setState({ paused: true })}
            paused={this.state.paused}
          />
          <View style={styles.bottom}>
            <ProgressBar
              onSeek={this.seek.bind(this)}
              videoLength={this.state.totalLength}
              currentPosition={this.state.currentPosition}
              onSlidingStart={() => this.setState({ paused: true })}
            />
            <FullscreenButton />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
    videoElement: {
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-around',
  }
})
