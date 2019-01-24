import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import Player from './components/Player'
import VideoInfo from './components/VideoInfo'
import Playlist from './components/Playlist'
import { VIDEOS } from './data.js'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      videos: VIDEOS,
      currentVideo: VIDEOS[0]
    }

    this.onSelectVideo = this.onSelectVideo.bind(this)
  }

  onSelectVideo(id) {
    this.setState({
      currentVideo: this.state.videos.find(e => e.id === id)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Player videoUrl={this.state.currentVideo.url} />
        <VideoInfo
          title={this.state.currentVideo.title}
          views={this.state.currentVideo.views}
          likes={this.state.currentVideo.likes}
          author={this.state.currentVideo.author}
        />
        <Playlist
          videos={this.state.videos}
          onPress={this.onSelectVideo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
