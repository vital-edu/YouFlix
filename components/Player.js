import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
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
      visible: true,
      fullscreen: false,
    }
    this.interval = 0
    this.video = Video
  }


  componentDidMount() {
    this.setState({ visible: true })
    this.interval = setTimeout(() => {
      this.setState((state, props) => {
        return {
          visible: false,
        }
      })
    }, 2000)
  }

  componentWillUnmount() {
    if (this.interval) clearTimeout(this.interval)
    this.interval = 0
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.visible && this.state.visible) {
      if (this.interval) clearTimeout(this.interval)
      this.interval = setTimeout(() => {
        this.setState({
          visible: false,
        })
      }, 2000)
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
    this.player && this.player.seek(time)
    this.setState({
      currentPosition: time,
    })
  }

  onEnd() {
    this.player.seek(0)
    this.setState({
      currentPosition: 0,
      paused: true,
    })
  }

  showPlayButton() {
    this.setState({
      visible: true
    })
  }

  toggleFullscreen() {
    this.setState(prevState => {
      prevState.fullscreen ?
        this.player.dismissFullscreenPlayer() :
        this.player.presentFullscreenPlayer()

      return { fullscreen: !prevState.fullscreen }
    })
  }

  render() {
    const bottomBar = (
      <View style={styles.bottom}>
        <ProgressBar
          onSeek={this.seek.bind(this)}
          videoLength={this.state.totalLength}
          currentPosition={this.state.currentPosition}
          onSlidingStart={() => this.setState({ paused: true })}
        />
        <FullscreenButton
          onFullscreen={this.toggleFullscreen.bind(this)}
        />
      </View>
    )
    const playButton = (
      <PlayButton
        onPressPlay={() => this.setState({ paused: false })}
        onPressPause={() => this.setState({ paused: true })}
        paused={this.state.paused}
      />
    )
    const showPlayButton = (
      <TouchableOpacity
        onPress={this.showPlayButton.bind(this)}
        style={{ flex: 1 }}
      />
    )

    return (
      <View style={this.state.fullscreen ? styles.fullscreen : styles.container }>
        <Video
          source={{ uri: this.props.videoUrl }}
          ref={(ref) => this.player = ref}
          paused={this.state.paused}
          onEnd={this.onEnd.bind(this)}
          onLoad={this.setDuration.bind(this)}
          onProgress={this.setTime.bind(this)}
          style={styles.videoElement}
          resizeMode={this.state.fullscreen ? 'center' : 'stretch'}
        />

        <View style={styles.overlay}>
          {this.state.visible ? playButton : showPlayButton}
          {this.state.visible ? bottomBar : null}
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 240,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
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
  },
  fullscreen: {
    top: 0,
    right: 0,
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  }
})
