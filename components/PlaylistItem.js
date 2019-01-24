import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Video from 'react-native-video'

const bufferConfig = {
  bufferForPlaybackMs: 1,
  bufferForPlaybackAfterRebufferMs: 1,
  minBufferMs: 1,
  maxBufferMs: 1000,
}

const maxLength = 32

export default class PlaylistItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.id);
  }

  render() {
    const shortTitle = this.props.title.length > maxLength ?
      this.props.title.slice(0, maxLength - 3) + '...' :
      this.props.title

    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Video
          source={{ uri: this.props.url }}
          ref='videoElement'
          paused={true}
          style={styles.videoElement}
          bufferConfig={bufferConfig}
          posterResizeMode='cover'
          resizeMode='cover'
        />
        <Text style={styles.title}>{shortTitle}</Text>
      </TouchableOpacity>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    marginRight: 5,
  },
  videoElement: {
    width: 210,
    height: 118,
  },
  title: {
    color: 'black',
  },
});
